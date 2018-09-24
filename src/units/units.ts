import { MediqChainUnit } from '../chain/properties';
import { Units } from '../constants/units';
import { Mediq } from '../mediq';

export abstract class MediqUnits {
	constructor(private mediq: Mediq) {}

	protected set(units: Units): Mediq {
		this.mediq.chain.push(new MediqChainUnit(units));
		return this.mediq;
	}
}
