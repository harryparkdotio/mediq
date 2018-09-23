import { UpdateKeywords } from '../../../src/constants/keywords';
import { MediqUpdate } from '../../../src/keywords';
import { Mediq } from '../../../src/mediq';

describe('MediqUpdate', () => {
	it('should have keywords', () => {
		const m = new Mediq();
		const mo = new MediqUpdate(m);

		Object.keys(UpdateKeywords).map(x => {
			expect(mo).toHaveProperty(x);
		});

		expect.hasAssertions();
		expect.assertions(Object.keys(UpdateKeywords).length);
	});
});
