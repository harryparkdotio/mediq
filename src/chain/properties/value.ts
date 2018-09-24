import { MediqChainProperty } from '../property';
import { ChainPropertyTypes } from '../property-types';

export class MediqChainValue extends MediqChainProperty {
	constructor(public value: any) {
		super(ChainPropertyTypes.value);
	}
}
