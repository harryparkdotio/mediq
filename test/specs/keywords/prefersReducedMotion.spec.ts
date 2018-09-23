import { PrefersReduceMotionKeywords } from '../../../src/constants/keywords';
import { MediqPrefersReducedMotion } from '../../../src/keywords';
import { Mediq } from '../../../src/mediq';

describe('MediqPrefersReducedMotion', () => {
	it('should have keywords', () => {
		const m = new Mediq();
		const mo = new MediqPrefersReducedMotion(m);

		Object.keys(PrefersReduceMotionKeywords).map(x => {
			expect(mo).toHaveProperty(x);
		});

		expect.hasAssertions();
		expect.assertions(Object.keys(PrefersReduceMotionKeywords).length);
	});
});
