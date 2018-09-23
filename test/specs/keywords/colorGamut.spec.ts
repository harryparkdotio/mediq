import { ColorGamutKeywords } from '../../../src/constants/keywords';
import { MediqColorGamut } from '../../../src/keywords';
import { Mediq } from '../../../src/mediq';

describe('MediqColorGamut', () => {
	it('should have keywords', () => {
		const m = new Mediq();
		const mo = new MediqColorGamut(m);

		Object.keys(ColorGamutKeywords).map(x => {
			expect(mo).toHaveProperty(x);
		});

		expect.hasAssertions();
		expect.assertions(Object.keys(ColorGamutKeywords).length);
	});
});
