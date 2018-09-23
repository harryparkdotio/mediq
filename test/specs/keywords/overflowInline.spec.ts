import { OverflowInlineKeywords } from '../../../src/constants/keywords';
import { MediqOverflowInline } from '../../../src/keywords';
import { Mediq } from '../../../src/mediq';

describe('MediqOverflowInline', () => {
	it('should have keywords', () => {
		const m = new Mediq();
		const mo = new MediqOverflowInline(m);

		Object.keys(OverflowInlineKeywords).map(x => {
			expect(mo).toHaveProperty(x);
		});

		expect.hasAssertions();
		expect.assertions(Object.keys(OverflowInlineKeywords).length);
	});
});
