import { InvertedColorsKeywords, Keywords } from '../constants/keywords';
import { Mediq } from '../mediq';
import { MediqKeywords } from './keywords';

export class MediqInvertedColors extends MediqKeywords implements Record<keyof typeof InvertedColorsKeywords, Mediq> {
	public get none(): Mediq {
		return this.set(Keywords.none);
	}

	public get inverted(): Mediq {
		return this.set(Keywords.inverted);
	}
}
