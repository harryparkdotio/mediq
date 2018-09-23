import { OverflowBlockKeywords } from '../../../src/constants/keywords';
import { MediqOverflowBlock } from '../../../src/keywords';
import { Mediq } from '../../../src/mediq';

describe('MediqOverflowBlock', () => {
	it('should have keywords', () => {
		const m = new Mediq();
		const mo = new MediqOverflowBlock(m);

		Object.keys(OverflowBlockKeywords).map(x => {
			expect(mo).toHaveProperty(x);
		});

		expect.hasAssertions();
		expect.assertions(Object.keys(OverflowBlockKeywords).length);
	});
});
