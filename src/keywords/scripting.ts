import { Keywords, ScriptingKeywords } from '../constants/keywords';
import { Mediq } from '../mediq';
import { MediqKeywords } from './keywords';

export class MediqScripting extends MediqKeywords implements Record<keyof typeof ScriptingKeywords, Mediq> {
	public get none() {
		return this.set(Keywords.none);
	}

	public get initialOnly() {
		return this.set(Keywords.initialOnly);
	}

	public get enabled() {
		return this.set(Keywords.enabled);
	}
}
