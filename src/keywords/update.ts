import { Keywords, UpdateKeywords } from '../constants/keywords';
import { Mediq } from '../mediq';
import { MediqKeywords } from './keywords';

export class MediqUpdate extends MediqKeywords implements Record<keyof typeof UpdateKeywords, Mediq> {
	public get none(): Mediq {
		return this.set(Keywords.none);
	}

	public get slow(): Mediq {
		return this.set(Keywords.slow);
	}

	public get fast(): Mediq {
		return this.set(Keywords.fast);
	}
}
