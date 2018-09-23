import { MediqResolution } from '../../../src/units/resolution';
import { ResolutionUnits } from '../../../src/constants/units';
import { Mediq } from '../../../src/mediq';

describe('MediqResolution', () => {
	it('should have units', () => {
		const m = new Mediq();
		const mo = new MediqResolution(m);

		Object.keys(ResolutionUnits).map(x => {
			expect(mo).toHaveProperty(x);
		});

		expect.hasAssertions();
		expect.assertions(Object.keys(ResolutionUnits).length);
	});
});
