import { Types } from '../../constants/types';
import { MediqChainProperty } from '../property';
import { ChainPropertyTypes } from '../property-types';

export class MediqChainType extends MediqChainProperty {
	constructor(public value: Types) {
		super(ChainPropertyTypes.type);
	}
}
