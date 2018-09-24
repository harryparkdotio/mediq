import { MediqChainKeyword } from '../../../../src/chain/properties';
import { ChainPropertyTypes } from '../../../../src/chain/property-types';
import { Keywords } from '../../../../src/constants/keywords';

describe('MediqChainKeyword', () => {
	describe('constructor', () => {
		it('should create a new MediqChainKeyword instance', () => {
			const mck = new MediqChainKeyword(Keywords.hover);
			expect(mck).toHaveProperty('type', ChainPropertyTypes.keyword);
			expect(mck).toHaveProperty('value', Keywords.hover);
		});
	});
});
