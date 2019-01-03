import { MediqChainFeature } from '../../../../src/chain/properties';
import { ChainPropertyTypes } from '../../../../src/chain/property-types';

describe('MediqChainFeature', () => {
  describe('constructor', () => {
    it('should create a new MediqChainFeature instance', () => {
      const mcf = new MediqChainFeature('hover');
      expect(mcf).toHaveProperty('type', ChainPropertyTypes.feature);
      expect(mcf).toHaveProperty('value', 'hover');
    });
  });
});
