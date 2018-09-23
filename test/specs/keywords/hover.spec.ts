import { HoverKeywords } from '../../../src/constants/keywords';
import { MediqHover } from '../../../src/keywords';
import { Mediq } from '../../../src/mediq';

describe('MediqHover', () => {
	it('should have keywords', () => {
		const m = new Mediq();
		const mo = new MediqHover(m);

		Object.keys(HoverKeywords).map(x => {
			expect(mo).toHaveProperty(x);
		});

		expect.hasAssertions();
		expect.assertions(Object.keys(HoverKeywords).length);
	});
});
