import { InvertedColorsKeywords } from '../../../src/constants/keywords';
import { MediqInvertedColors } from '../../../src/keywords';
import { Mediq } from '../../../src/mediq';

describe('MediqInvertedColors', () => {
	it('should have keywords', () => {
		const m = new Mediq();
		const mo = new MediqInvertedColors(m);

		Object.keys(InvertedColorsKeywords).map(x => {
			expect(mo).toHaveProperty(x);
		});

		expect.hasAssertions();
		expect.assertions(Object.keys(InvertedColorsKeywords).length);
	});
});
