import { LightLevelKeywords } from '../../../src/constants/keywords';
import { MediqLightLevel } from '../../../src/keywords';
import { Mediq } from '../../../src/mediq';

describe('MediqLightLevel', () => {
	it('should have keywords', () => {
		const m = new Mediq();
		const mo = new MediqLightLevel(m);

		Object.keys(LightLevelKeywords).map(x => {
			expect(mo).toHaveProperty(x);
		});

		expect.hasAssertions();
		expect.assertions(Object.keys(LightLevelKeywords).length);
	});
});
