import { LengthUnits, Units } from '../constants/units';
import { Mediq } from '../mediq';
import { MediqUnits } from './units';

export class MediqLength extends MediqUnits implements Record<LengthUnits, Mediq> {
	public get em(): Mediq {
		return this.set(Units.em);
	}

	public get rem(): Mediq {
		return this.set(Units.rem);
	}

	public get vh(): Mediq {
		return this.set(Units.vh);
	}

	public get vw(): Mediq {
		return this.set(Units.vw);
	}

	public get px(): Mediq {
		return this.set(Units.px);
	}

	public get cm(): Mediq {
		return this.set(Units.cm);
	}

	public get mm(): Mediq {
		return this.set(Units.mm);
	}

	public get in(): Mediq {
		return this.set(Units.in);
	}

	public get pc(): Mediq {
		return this.set(Units.pc);
	}

	public get pt(): Mediq {
		return this.set(Units.pt);
	}
}
