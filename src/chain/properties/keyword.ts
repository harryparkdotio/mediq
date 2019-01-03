import { MediqChainProperty } from '../property';
import { ChainPropertyTypes } from '../property-types';

export class MediqChainKeyword extends MediqChainProperty {
  constructor(public value: string) {
    super(ChainPropertyTypes.keyword);
  }
}
