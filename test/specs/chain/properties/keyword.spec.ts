import { MediqChainKeyword } from '../../../../src/chain/properties';
import { ChainPropertyTypes } from '../../../../src/chain/property-types';

describe('MediqChainKeyword', () => {
	describe('constructor', () => {
		it('should create a new MediqChainKeyword instance', () => {
			const mck = new MediqChainKeyword('hover');
			expect(mck).toHaveProperty('type', ChainPropertyTypes.keyword);
			expect(mck).toHaveProperty('value', 'hover');
		});
	});
});
