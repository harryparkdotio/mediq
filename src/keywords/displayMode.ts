import { DisplayModeKeywords, Keywords } from '../constants/keywords';
import { Mediq } from '../mediq';
import { MediqKeywords } from './keywords';

export class MediqDisplayMode extends MediqKeywords implements Record<keyof typeof DisplayModeKeywords, Mediq> {
	public get fullscreen(): Mediq {
		return this.set(Keywords.fullscreen);
	}

	public get standalone(): Mediq {
		return this.set(Keywords.standalone);
	}

	public get minimalUi(): Mediq {
		return this.set(Keywords.minimalUi);
	}

	public get browser(): Mediq {
		return this.set(Keywords.browser);
	}
}
