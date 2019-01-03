import { MediqChainProperty } from '../property';
import { ChainPropertyTypes } from '../property-types';

export class MediqChainOperator extends MediqChainProperty {
	constructor(public value: string) {
		super(ChainPropertyTypes.operator);
	}
}
