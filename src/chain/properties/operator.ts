import { Operators } from '../../constants/operators';
import { MediqChainProperty } from '../property';
import { ChainPropertyTypes } from '../property-types';

export class MediqChainOperator extends MediqChainProperty {
	constructor(public value: Operators) {
		super(ChainPropertyTypes.operator);
	}
}
