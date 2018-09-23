import { DisplayModeKeywords } from '../../../src/constants/keywords';
import { MediqDisplayMode } from '../../../src/keywords';
import { Mediq } from '../../../src/mediq';

describe('MediqDisplayMode', () => {
	it('should have keywords', () => {
		const m = new Mediq();
		const mo = new MediqDisplayMode(m);

		Object.keys(DisplayModeKeywords).map(x => {
			expect(mo).toHaveProperty(x);
		});

		expect.hasAssertions();
		expect.assertions(Object.keys(DisplayModeKeywords).length);
	});
});
