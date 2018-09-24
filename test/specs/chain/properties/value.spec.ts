import { MediqChainValue } from '../../../../src/chain/properties';
import { ChainPropertyTypes } from '../../../../src/chain/property-types';

describe('MediqChainValue', () => {
	describe('constructor', () => {
		it('should create a new MediqChainValue instance', () => {
			const mcf = new MediqChainValue(123);
			expect(mcf).toHaveProperty('type', ChainPropertyTypes.value);
			expect(mcf).toHaveProperty('value', 123);
		});
	});
});
