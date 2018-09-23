import { ScanKeywords } from '../../../src/constants/keywords';
import { MediqScan } from '../../../src/keywords';
import { Mediq } from '../../../src/mediq';

describe('MediqScan', () => {
	it('should have keywords', () => {
		const m = new Mediq();
		const mo = new MediqScan(m);

		Object.keys(ScanKeywords).map(x => {
			expect(mo).toHaveProperty(x);
		});

		expect.hasAssertions();
		expect.assertions(Object.keys(ScanKeywords).length);
	});
});
