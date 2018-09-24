import { MediqChainFeature } from '../../../../src/chain/properties';
import { ChainPropertyTypes } from '../../../../src/chain/property-types';
import { Features } from '../../../../src/constants/features';

describe('MediqChainFeature', () => {
	describe('constructor', () => {
		it('should create a new MediqChainFeature instance', () => {
			const mcf = new MediqChainFeature(Features.hover);
			expect(mcf).toHaveProperty('type', ChainPropertyTypes.feature);
			expect(mcf).toHaveProperty('value', Features.hover);
		});
	});
});
