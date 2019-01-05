import { IChain } from '../mediq';

export enum ChainType {
  type = 'type',
  operator = 'operator',
  prefix = 'prefix',
  feature = 'feature',
  value = 'value',
  keyword = 'keyword',
  unit = 'unit',
}

const featureGroupStartProps = [ChainType.prefix, ChainType.feature];
const featureGroupEndProps = [ChainType.keyword, ChainType.unit];
const featureGroupProps = [ChainType.feature, ChainType.keyword, ChainType.prefix, ChainType.unit, ChainType.value];

export type MediqChainPropertyGroups = IChain[][];

export class MediqAssembler {
  public assemble(chain: IChain[]): string {
    const group = this.group(chain);
    const assembledProps = this.assembleProps(group);

    return assembledProps.join(' ').replace(' , ', ', ');
  }

  public group(chain: IChain[]): MediqChainPropertyGroups {
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

  public assembleProp(propGroup: IChain[]): string {
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

  public assembleFeature(featureGroup: IChain[]): string {
    return featureGroup
      .reduce((group: string[], prop) => {
        if (prop.type === ChainType.prefix) {
          group.push(`${prop.value}-`);
        } else if (prop.type === ChainType.feature) {
          group.push(`${prop.value}: `);
        } else {
          group.push(`${prop.value}`);
        }
        return group;
      }, [])
      .join('');
  }
}
