import { Keywords, ScanKeywords } from '../constants/keywords';
import { Mediq } from '../mediq';
import { MediqKeywords } from './keywords';

export class MediqScan extends MediqKeywords implements Record<keyof typeof ScanKeywords, Mediq> {
	public get interlace(): Mediq {
		return this.set(Keywords.interlace);
	}

	public get progressive(): Mediq {
		return this.set(Keywords.progressive);
	}
}
