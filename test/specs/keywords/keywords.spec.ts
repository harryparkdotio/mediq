import { Keywords } from '../../../src/constants/keywords';
import { MediqKeywords } from '../../../src/keywords/keywords';
import { Mediq } from '../../../src/mediq';

class Mop extends MediqKeywords {
	public get use() {
		return this.set(Keywords.landscape);
	}
}

describe('MediqKeywords', () => {
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
			expect(m.chain[0].type).toEqual('keyword');
			expect(m.chain[0].value).toEqual('landscape');
			expect(m.chain).toHaveLength(1);
		});
	});
});
