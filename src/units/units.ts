import { Mediq } from '../mediq';
import { Units } from '../constants/units';

export abstract class MediqUnits {
	constructor(private mediq: Mediq) {}

	protected set(units: Units): Mediq {
		this.mediq.chain.push(units);
		return this.mediq;
	}
}
