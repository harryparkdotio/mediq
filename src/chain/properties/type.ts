import { MediqChainProperty } from '../property';
import { ChainPropertyTypes } from '../property-types';

export class MediqChainType extends MediqChainProperty {
	constructor(public value: string) {
		super(ChainPropertyTypes.type);
	}
}
