import { Features } from './constants/features';
import * as Keywords from './keywords';
import { MediqLength } from './units/length';
import { MediqResolution } from './units/resolution';

export function mediq() {
	return new Mediq();
}

export interface IMediqFeatures {
	width(width: number): MediqLength;
	height(height: number): MediqLength;
	aspectRatio(a: number, b: number): Mediq;
	aspectRatio(ratio: string): Mediq;
	orientation: Keywords.MediqOrientation;
	resolution(resolution: number): MediqResolution;
	scan: Keywords.MediqScan;
	update: Keywords.MediqUpdate;
	overflowBlock: Keywords.MediqOverflowBlock;
	overflowInline: Keywords.MediqOverflowInline;
	color(bits: number): Mediq;
	colorGamut: Keywords.MediqColorGamut;
	displayMode: Keywords.MediqDisplayMode;
	invertedColors: Keywords.MediqInvertedColors;
	anyPointer: Keywords.MediqPointer;
	pointer: Keywords.MediqPointer;
	anyHover: Keywords.MediqHover;
	hover: Keywords.MediqHover;
	lightLevel: Keywords.MediqLightLevel;
	prefersReducedMotion: Keywords.MediqPrefersReducedMotion;
	scripting: Keywords.MediqScripting;
}

// tslint:disable-next-line:no-empty-interface
export interface IMediq extends IMediqFeatures {

}

export class Mediq implements IMediq {
	public chain: any[];

	constructor() {
		this.chain = [];
	}

	private feature(feature: Features, value?: any): this {
		if (value !== undefined) {
			this.chain.push(feature, value);
		} else {
			this.chain.push(feature);
		}
		return this;
	}

	public width(width: number): MediqLength {
		this.feature(Features.width, width);
		return new MediqLength(this);
	}

	public height(height: number): MediqLength {
		this.feature(Features.height, height);
		return new MediqLength(this);
	}

	public aspectRatio(a: number, b: number): this;
	public aspectRatio(ratio: string): this;
	public aspectRatio(aOrRatio: string | number, b?: number): this {
		if (typeof aOrRatio === 'string') {
			return this.feature(Features.aspectRatio, aOrRatio);
		} else if (typeof aOrRatio === 'number' && typeof b === 'number') {
			return this.feature(Features.aspectRatio, `${aOrRatio}/${b}`);
		}
		return this;
	}

	public get orientation(): Keywords.MediqOrientation {
		this.feature(Features.orientation);
		return new Keywords.MediqOrientation(this);
	}

	public resolution(resolution: number): MediqResolution {
		this.feature(Features.resolution, resolution);
		return new MediqResolution(this);
	}

	public get scan(): Keywords.MediqScan {
		this.feature(Features.scan);
		return new Keywords.MediqScan(this);
	}

	public get update(): Keywords.MediqUpdate {
		this.feature(Features.update);
		return new Keywords.MediqUpdate(this);
	}

	public get overflowBlock(): Keywords.MediqOverflowBlock {
		this.feature(Features.overflowBlock);
		return new Keywords.MediqOverflowBlock(this);
	}

	public get overflowInline(): Keywords.MediqOverflowInline {
		this.feature(Features.overflowInline);
		return new Keywords.MediqOverflowInline(this);
	}

	public color(bits: number): this {
		return this.feature(Features.color, bits);
	}

	public get colorGamut(): Keywords.MediqColorGamut {
		this.feature(Features.colorGamut);
		return new Keywords.MediqColorGamut(this);
	}

	public get displayMode(): Keywords.MediqDisplayMode {
		this.feature(Features.displayMode);
		return new Keywords.MediqDisplayMode(this);
	}

	public get invertedColors(): Keywords.MediqInvertedColors {
		this.feature(Features.invertedColors);
		return new Keywords.MediqInvertedColors(this);
	}

	public get anyPointer(): Keywords.MediqPointer {
		this.feature(Features.anyPointer);
		return new Keywords.MediqPointer(this);
	}

	public get pointer(): Keywords.MediqPointer {
		this.feature(Features.pointer);
		return new Keywords.MediqPointer(this);
	}

	public get anyHover(): Keywords.MediqHover {
		this.feature(Features.anyHover);
		return new Keywords.MediqHover(this);
	}

	public get hover(): Keywords.MediqHover {
		this.feature(Features.hover);
		return new Keywords.MediqHover(this);
	}

	public get lightLevel(): Keywords.MediqLightLevel {
		this.feature(Features.lightLevel);
		return new Keywords.MediqLightLevel(this);
	}

	public get prefersReducedMotion(): Keywords.MediqPrefersReducedMotion {
		this.feature(Features.prefersReducedMotion);
		return new Keywords.MediqPrefersReducedMotion(this);
	}

	public get scripting(): Keywords.MediqScripting {
		this.feature(Features.scripting);
		return new Keywords.MediqScripting(this);
	}
}
