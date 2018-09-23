import { Mediq } from '../mediq';
import { MediqKeywords } from './keywords';
import { Keywords, OrientationKeywords } from '../constants/keywords';

export class MediqOrientation extends MediqKeywords implements Record<OrientationKeywords, Mediq> {
	public get portrait(): Mediq {
		return this.set(Keywords.portrait);
	}

	public get landscape(): Mediq {
		return this.set(Keywords.landscape);
	}
}
