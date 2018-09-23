import { Keywords, OrientationKeywords } from '../constants/keywords';
import { Mediq } from '../mediq';
import { MediqKeywords } from './keywords';

export class MediqOrientation extends MediqKeywords implements Record<keyof typeof OrientationKeywords, Mediq> {
	public get portrait(): Mediq {
		return this.set(Keywords.portrait);
	}

	public get landscape(): Mediq {
		return this.set(Keywords.landscape);
	}
}
