import { MediqUnits } from '../../../src/units/units';
import { Units } from '../../../src/constants/units';
import { Mediq } from '../../../src/mediq';

class Mop extends MediqUnits {
	public get use() {
		return this.set(Units.cm);
	}
}

describe('MediqUnits', () => {
	describe('set', () => {
		it('should return Mediq instance', () => {
			const m = new Mediq();
			const mop = new Mop(m);
			expect(mop.use).toBe(m);
		});

		it('should add to the chain', () => {
			const m = new Mediq();
			const mop = new Mop(m);
			// tslint:disable-next-line:no-unused-expression
			mop.use;
			expect(m.chain).toEqual(['cm']);
		});
	});
});
