import { Prefixes } from '../../constants/prefixes';
import { MediqChainProperty } from '../property';
import { ChainPropertyTypes } from '../property-types';

export class MediqChainPrefix extends MediqChainProperty {
	constructor(public value: Prefixes) {
		super(ChainPropertyTypes.prefix);
	}
}
