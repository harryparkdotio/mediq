import { MediqChainPrefix } from '../../../../src/chain/properties';
import { ChainPropertyTypes } from '../../../../src/chain/property-types';

describe('MediqChainPrefix', () => {
	describe('constructor', () => {
		it('should create a new MediqChainPrefix instance', () => {
			const mcp = new MediqChainPrefix('max');
			expect(mcp).toHaveProperty('type', ChainPropertyTypes.prefix);
			expect(mcp).toHaveProperty('value', 'max');
		});
	});
});
