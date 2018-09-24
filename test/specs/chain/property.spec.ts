import { MediqChainProperty } from '../../../src/chain/property';
import { ChainPropertyTypes } from '../../../src/chain/property-types';

class Mop extends MediqChainProperty {
	constructor(a: ChainPropertyTypes, b: any) {
		super(a);
		this.value = b;
	}
}

describe('MediqChainProperty', () => {
	describe('abstract', () => {
		it('should set type and value', () => {
			const m = new Mop(ChainPropertyTypes.unit, 12);
			expect(m).toHaveProperty('type', ChainPropertyTypes.unit);
			expect(m).toHaveProperty('value', 12);
		});
	});
});
