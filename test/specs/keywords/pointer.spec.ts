import { PointerKeywords } from '../../../src/constants/keywords';
import { MediqPointer } from '../../../src/keywords';
import { Mediq } from '../../../src/mediq';

describe('MediqPointer', () => {
	it('should have keywords', () => {
		const m = new Mediq();
		const mo = new MediqPointer(m);

		Object.keys(PointerKeywords).map(x => {
			expect(mo).toHaveProperty(x);
		});

		expect.hasAssertions();
		expect.assertions(Object.keys(PointerKeywords).length);
	});
});
