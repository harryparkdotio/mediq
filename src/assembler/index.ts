import { MediqChainProperty } from '../chain';
import { ChainPropertyTypes } from '../chain/property-types';

const featureGroupStartProps = [ChainPropertyTypes.prefix, ChainPropertyTypes.feature];
const featureGroupEndProps = [ChainPropertyTypes.keyword, ChainPropertyTypes.unit];
const featureGroupProps = [
  ChainPropertyTypes.feature,
  ChainPropertyTypes.keyword,
  ChainPropertyTypes.prefix,
  ChainPropertyTypes.unit,
  ChainPropertyTypes.value,
];

export type MediqChainProperties = MediqChainProperty[];
export type MediqChainPropertyGroups = MediqChainProperties[];

export class MediqAssembler {
  constructor(private mediq: any) {}

  public assemble(): string {
    const chain = this.mediq.chain;
    const group = this.group(chain);
    const assembledProps = this.assembleProps(group);

    return assembledProps.join(' ').replace(' , ', ', ');
  }

  public group(chain: MediqChainProperties): MediqChainPropertyGroups {
    let currentGroupIdx = 0;

    return chain.reduce((groups: MediqChainPropertyGroups, prop) => {
      if (!groups[currentGroupIdx]) {
        groups[currentGroupIdx] = [];
      }

      const isStartOfGrouping = featureGroupStartProps.includes(prop.type);
      const isEndOfGrouping = featureGroupEndProps.includes(prop.type);
      const isPartOfFeature = featureGroupProps.includes(prop.type);

      if (isStartOfGrouping) {
        groups[currentGroupIdx].push(prop);
      } else if (isEndOfGrouping) {
        groups[currentGroupIdx].push(prop);
        currentGroupIdx++;
      } else if (isPartOfFeature) {
        groups[currentGroupIdx].push(prop);
      } else {
        groups[currentGroupIdx].push(prop);
        currentGroupIdx++;
      }

      return groups;
    }, []);
  }

  public assembleProps(propGroups: MediqChainPropertyGroups): string[] {
    return propGroups.map(this.assembleProp.bind(this));
  }

  public assembleProp(propGroup: MediqChainProperties): string {
    if (propGroup.map(p => p.type).some(p => featureGroupProps.includes(p))) {
      const assembledFeature = this.assembleFeature(propGroup);
      return `(${assembledFeature})`;
    } else {
      return propGroup
        .reduce((group: string[], prop) => {
          group.push(`${prop.value}`);
          return group;
        }, [])
        .join('');
    }
  }

  public assembleFeature(featureGroup: MediqChainProperties): string {
    return featureGroup
      .reduce((group: string[], prop) => {
        if (prop.type === ChainPropertyTypes.prefix) {
          group.push(`${prop.value}-`);
        } else if (prop.type === ChainPropertyTypes.feature) {
          group.push(`${prop.value}: `);
        } else {
          group.push(`${prop.value}`);
        }
        return group;
      }, [])
      .join('');
  }
}
