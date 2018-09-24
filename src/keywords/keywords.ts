import { MediqChainKeyword } from '../chain/properties';
import { Keywords } from '../constants/keywords';
import { Mediq } from '../mediq';

export abstract class MediqKeywords {
	constructor(private mediq: Mediq) {}

	protected set(keyword: Keywords): Mediq {
		this.mediq.chain.push(new MediqChainKeyword(keyword));
		return this.mediq;
	}
}
