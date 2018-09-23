import { Keywords, LightLevelKeywords } from '../constants/keywords';
import { Mediq } from '../mediq';
import { MediqKeywords } from './keywords';

export class MediqLightLevel extends MediqKeywords implements Record<keyof typeof LightLevelKeywords, Mediq> {
	public get dim() {
		return this.set(Keywords.dim);
	}

	public get normal() {
		return this.set(Keywords.normal);
	}

	public get washed() {
		return this.set(Keywords.washed);
	}
}
