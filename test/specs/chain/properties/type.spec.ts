import { MediqChainType } from '../../../../src/chain/properties';
import { ChainPropertyTypes } from '../../../../src/chain/property-types';

describe('MediqChainType', () => {
  describe('constructor', () => {
    it('should create a new MediqChainType instance', () => {
      const mcf = new MediqChainType('print');
      expect(mcf).toHaveProperty('type', ChainPropertyTypes.type);
      expect(mcf).toHaveProperty('value', 'print');
    });
  });
});
