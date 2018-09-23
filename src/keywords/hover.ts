import { HoverKeywords, Keywords } from '../constants/keywords';
import { Mediq } from '../mediq';
import { MediqKeywords } from './keywords';

export class MediqHover extends MediqKeywords implements Record<keyof typeof HoverKeywords, Mediq> {
	public get none() {
		return this.set(Keywords.none);
	}

	public get hover() {
		return this.set(Keywords.hover);
	}
}
