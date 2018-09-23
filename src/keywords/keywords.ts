import { Mediq } from '../mediq';
import { Keywords } from '../constants/keywords';

export abstract class MediqKeywords {
	constructor(private mediq: Mediq) {}

	protected set(keyword: Keywords): Mediq {
		this.mediq.chain.push(keyword);
		return this.mediq;
	}
}
