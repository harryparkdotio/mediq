import { Keywords, PointerKeywords } from '../constants/keywords';
import { Mediq } from '../mediq';
import { MediqKeywords } from './keywords';

export class MediqPointer extends MediqKeywords implements Record<keyof typeof PointerKeywords, Mediq> {
	public get none() {
		return this.set(Keywords.none);
	}

	public get coarse() {
		return this.set(Keywords.coarse);
	}

	public get fine() {
		return this.set(Keywords.fine);
	}
}
