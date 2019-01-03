import { MediqChainUnit } from '../../../../src/chain/properties';
import { ChainPropertyTypes } from '../../../../src/chain/property-types';

describe('MediqChainUnit', () => {
  describe('constructor', () => {
    it('should create a new MediqChainUnit instance', () => {
      const mcf = new MediqChainUnit('pc');
      expect(mcf).toHaveProperty('type', ChainPropertyTypes.unit);
      expect(mcf).toHaveProperty('value', 'pc');
    });
  });
});
