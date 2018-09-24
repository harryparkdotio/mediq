import { Features } from '../../constants/features';
import { MediqChainProperty } from '../property';
import { ChainPropertyTypes } from '../property-types';

export class MediqChainFeature extends MediqChainProperty {
	constructor(public value: Features) {
		super(ChainPropertyTypes.feature);
	}
}
