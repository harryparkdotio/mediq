import { MediqChainProperty } from '../property';
import { ChainPropertyTypes } from '../property-types';

export class MediqChainUnit extends MediqChainProperty {
  constructor(public value: string) {
    super(ChainPropertyTypes.unit);
  }
}
