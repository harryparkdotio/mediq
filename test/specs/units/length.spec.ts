import { MediqLength } from '../../../src/units/length';
import { LengthUnits } from '../../../src/constants/units';
import { Mediq } from '../../../src/mediq';

describe('MediqLength', () => {
	it('should have units', () => {
		const m = new Mediq();
		const mo = new MediqLength(m);

		Object.keys(LengthUnits).map(x => {
			expect(mo).toHaveProperty(x);
		});

		expect.hasAssertions();
		expect.assertions(Object.keys(LengthUnits).length);
	});
});
