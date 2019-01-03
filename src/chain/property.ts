import { ChainPropertyTypes } from './property-types';

export abstract class MediqChainProperty {
  public value: any;

  constructor(public readonly type: ChainPropertyTypes) {}
}
