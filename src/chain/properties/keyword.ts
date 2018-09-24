import { Keywords } from '../../constants/keywords';
import { MediqChainProperty } from '../property';
import { ChainPropertyTypes } from '../property-types';

export class MediqChainKeyword extends MediqChainProperty {
	constructor(public value: Keywords) {
		super(ChainPropertyTypes.keyword);
	}
}
