import { MediqChainProperty } from '../chain';
import { ChainPropertyTypes } from '../chain/property-types';
import { Mediq } from '../mediq';

const featureGroupStartProps = [ChainPropertyTypes.prefix, ChainPropertyTypes.feature];
const featureGroupEndProps = [ChainPropertyTypes.keyword, ChainPropertyTypes.unit];

export class MediqFeatureAssembler {
	constructor(private mediq: Mediq) {}

	public groupFeatures(): MediqChainProperty[][] {
		let currentGroupIdx = 0;

		return this.mediq.chain.reduce((groups: MediqChainProperty[][], prop) => {
			if (!groups[currentGroupIdx]) {
				groups[currentGroupIdx] = [];
			}

			const isStartOfGrouping = featureGroupStartProps.includes(prop.type);
			const isEndOfGrouping = featureGroupEndProps.includes(prop.type);

			if (isStartOfGrouping) {
				groups[currentGroupIdx].push(prop);
			} else if (isEndOfGrouping) {
				groups[currentGroupIdx].push(prop);
				currentGroupIdx++;
			} else {
				groups[currentGroupIdx].push(prop);
			}

			return groups;
		}, []);
	}

	public assembleFeatures(groupedFeatures: MediqChainProperty[][]): string[] {
		return groupedFeatures.map(this.assembleFeature);
	}

	public assembleFeature(featureGroup: MediqChainProperty[]): string {
		return featureGroup.reduce((group: string[], prop) => {
			if (prop.type === ChainPropertyTypes.prefix) {
				group.push(`${prop.value}-`);
			} else if (prop.type === ChainPropertyTypes.feature) {
				group.push(`${prop.value}: `);
			} else {
				group.push(`${prop.value}`);
			}
			return group;
		}, []).join('');
	}
}
