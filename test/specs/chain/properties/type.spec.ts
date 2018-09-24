import { MediqChainType } from '../../../../src/chain/properties';
import { ChainPropertyTypes } from '../../../../src/chain/property-types';
import { Types } from '../../../../src/constants/types';

describe('MediqChainType', () => {
	describe('constructor', () => {
		it('should create a new MediqChainType instance', () => {
			const mcf = new MediqChainType(Types.print);
			expect(mcf).toHaveProperty('type', ChainPropertyTypes.type);
			expect(mcf).toHaveProperty('value', Types.print);
		});
	});
});
