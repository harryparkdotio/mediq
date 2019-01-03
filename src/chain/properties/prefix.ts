import { MediqChainProperty } from '../property';
import { ChainPropertyTypes } from '../property-types';

export class MediqChainPrefix extends MediqChainProperty {
	constructor(public value: string) {
		super(ChainPropertyTypes.prefix);
	}
}
