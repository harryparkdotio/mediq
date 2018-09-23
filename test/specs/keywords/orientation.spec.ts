import { MediqOrientation } from '../../../src/keywords/orientation';
import { OrientationKeywords } from '../../../src/constants/keywords';
import { Mediq } from '../../../src/mediq';

describe('MediqOrientation', () => {
	it('should have keywords', () => {
		const m = new Mediq();
		const mo = new MediqOrientation(m);

		Object.keys(OrientationKeywords).map(x => {
			expect(mo).toHaveProperty(x);
		});

		expect.hasAssertions();
		expect.assertions(Object.keys(OrientationKeywords).length);
	});
});
