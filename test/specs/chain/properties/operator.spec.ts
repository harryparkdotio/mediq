import { MediqChainOperator } from '../../../../src/chain/properties';
import { ChainPropertyTypes } from '../../../../src/chain/property-types';

describe('MediqChainOperator', () => {
  describe('constructor', () => {
    it('should create a new MediqChainOperator instance', () => {
      const mco = new MediqChainOperator('and');
      expect(mco).toHaveProperty('type', ChainPropertyTypes.operator);
      expect(mco).toHaveProperty('value', 'and');
    });
  });
});
