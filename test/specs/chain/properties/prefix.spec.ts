import { MediqChainPrefix } from '../../../../src/chain/properties';
import { ChainPropertyTypes } from '../../../../src/chain/property-types';
import { Prefixes } from '../../../../src/constants/prefixes';

describe('MediqChainPrefix', () => {
	describe('constructor', () => {
		it('should create a new MediqChainPrefix instance', () => {
			const mcp = new MediqChainPrefix(Prefixes.max);
			expect(mcp).toHaveProperty('type', ChainPropertyTypes.prefix);
			expect(mcp).toHaveProperty('value', Prefixes.max);
		});
	});
});
