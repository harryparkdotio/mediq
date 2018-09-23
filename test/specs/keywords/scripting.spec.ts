import { ScriptingKeywords } from '../../../src/constants/keywords';
import { MediqScripting } from '../../../src/keywords';
import { Mediq } from '../../../src/mediq';

describe('MediqScripting', () => {
	it('should have keywords', () => {
		const m = new Mediq();
		const mo = new MediqScripting(m);

		Object.keys(ScriptingKeywords).map(x => {
			expect(mo).toHaveProperty(x);
		});

		expect.hasAssertions();
		expect.assertions(Object.keys(ScriptingKeywords).length);
	});
});
