import { Units } from '../../constants/units';
import { MediqChainProperty } from '../property';
import { ChainPropertyTypes } from '../property-types';

export class MediqChainUnit extends MediqChainProperty {
	constructor(public value: Units) {
		super(ChainPropertyTypes.unit);
	}
}
