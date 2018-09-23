import { Mediq } from '../mediq';
import { MediqUnits } from './units';
import { Units, ResolutionUnits } from '../constants/units';

export class MediqResolution extends MediqUnits implements Record<ResolutionUnits, Mediq> {
	public get dpi(): Mediq {
		return this.set(Units.dpi);
	}

	public get dpcm(): Mediq {
		return this.set(Units.dpcm);
	}

	public get dppx(): Mediq {
		return this.set(Units.dppx);
	}

	public get x(): Mediq {
		return this.set(Units.x);
	}
}
