import { MediqChainProperty } from '../property';
import { ChainPropertyTypes } from '../property-types';

export class MediqChainFeature extends MediqChainProperty {
  constructor(public value: string) {
    super(ChainPropertyTypes.feature);
  }
}
