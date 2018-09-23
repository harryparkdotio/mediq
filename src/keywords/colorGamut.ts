import { ColorGamutKeywords, Keywords } from '../constants/keywords';
import { Mediq } from '../mediq';
import { MediqKeywords } from './keywords';

export class MediqColorGamut extends MediqKeywords implements Record<keyof typeof ColorGamutKeywords, Mediq> {
	public get srgb(): Mediq {
		return this.set(Keywords.srgb);
	}

	public get p3(): Mediq {
		return this.set(Keywords.p3);
	}

	public get rec2020(): Mediq {
		return this.set(Keywords.rec2020);
	}
}
