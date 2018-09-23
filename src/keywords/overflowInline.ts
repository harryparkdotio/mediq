import { Keywords, OverflowInlineKeywords } from '../constants/keywords';
import { Mediq } from '../mediq';
import { MediqKeywords } from './keywords';

export class MediqOverflowInline extends MediqKeywords implements Record<keyof typeof OverflowInlineKeywords, Mediq> {
	public get none(): Mediq {
		return this.set(Keywords.none);
	}

	public get scroll(): Mediq {
		return this.set(Keywords.scroll);
	}
}
