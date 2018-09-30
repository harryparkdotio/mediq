import { Keywords, PrefersReduceMotionKeywords } from '../constants/keywords';
import { Mediq } from '../mediq';
import { MediqKeywords } from './keywords';

export class MediqPrefersReducedMotion extends MediqKeywords
	implements Record<keyof typeof PrefersReduceMotionKeywords, Mediq> {
	public get noPreference() {
		return this.set(Keywords.noPreference);
	}

	public get reduce() {
		return this.set(Keywords.reduce);
	}
}
