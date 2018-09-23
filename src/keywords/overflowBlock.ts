import { Keywords, OverflowBlockKeywords } from '../constants/keywords';
import { Mediq } from '../mediq';
import { MediqKeywords } from './keywords';

export class MediqOverflowBlock extends MediqKeywords implements Record<keyof typeof OverflowBlockKeywords, Mediq> {
	public get none(): Mediq {
		return this.set(Keywords.none);
	}

	public get scroll(): Mediq {
		return this.set(Keywords.scroll);
	}

	public get optionalPaged(): Mediq {
		return this.set(Keywords.optionalPaged);
	}

	public get paged(): Mediq {
		return this.set(Keywords.paged);
	}
}
