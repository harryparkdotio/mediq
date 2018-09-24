import { MediqChainProperty, Properties } from './chain';
import { Features } from './constants/features';
import { Operators } from './constants/operators';
import { Prefixes } from './constants/prefixes';
import { Types } from './constants/types';
import * as Keywords from './keywords';
import { MediqLength } from './units/length';
import { MediqResolution } from './units/resolution';

export function mediq() {
	return new Mediq();
}

export type MediqTypes = Record<keyof typeof Types, Mediq>;

export type MediqOperators = Record<keyof typeof Operators, Mediq>;

export type MediqPrefixes = Record<keyof typeof Prefixes, Mediq>;

export interface IMediqFeatures {
	width(width: number): MediqLength;
	height(height: number): MediqLength;
	aspectRatio(a: number, b: number): Mediq;
	aspectRatio(ratio: string): Mediq;
	orientation: Keywords.MediqOrientation;
	resolution(resolution: number): MediqResolution;
	scan: Keywords.MediqScan;
	grid(grid: 0 | 1): Mediq;
	update: Keywords.MediqUpdate;
	overflowBlock: Keywords.MediqOverflowBlock;
	overflowInline: Keywords.MediqOverflowInline;
	color(bits: number): Mediq;
	colorGamut: Keywords.MediqColorGamut;
	colorIndex(colorIndex: number): Mediq;
	displayMode: Keywords.MediqDisplayMode;
	monochrome(monochrome: 0 | 1): Mediq;
	invertedColors: Keywords.MediqInvertedColors;
	anyPointer: Keywords.MediqPointer;
	pointer: Keywords.MediqPointer;
	anyHover: Keywords.MediqHover;
	hover: Keywords.MediqHover;
	lightLevel: Keywords.MediqLightLevel;
	prefersReducedMotion: Keywords.MediqPrefersReducedMotion;
	scripting: Keywords.MediqScripting;
}

export interface IMediq extends MediqTypes, MediqOperators, MediqPrefixes, IMediqFeatures {

}

export class Mediq implements IMediq {
	public chain: MediqChainProperty[];

	constructor() {
		this.chain = [];
	}

	private type(type: Types): this {
		this.chain.push(new Properties.MediqChainType(type));
		return this;
	}

	public get all(): this {
		return this.type(Types.all);
	}

	public get print(): this {
		return this.type(Types.print);
	}

	public get screen(): this {
		return this.type(Types.screen);
	}

	public get speech(): this {
		return this.type(Types.speech);
	}

	private operator(operator: Operators): this {
		this.chain.push(new Properties.MediqChainOperator(operator));
		return this;
	}

	public get and(): this {
		return this.operator(Operators.and);
	}

	public get not(): this {
		return this.operator(Operators.not);
	}

	public get only(): this {
		return this.operator(Operators.only);
	}

	public get or(): this {
		return this.operator(Operators.or);
	}

	private prefix(prefix: Prefixes): this {
		this.chain.push(new Properties.MediqChainPrefix(prefix));
		return this;
	}

	public get min(): this {
		return this.prefix(Prefixes.min);
	}

	public get max(): this {
		return this.prefix(Prefixes.max);
	}

	private feature(feature: Features, value?: any): this {
		this.chain.push(new Properties.MediqChainFeature(feature));
		if (value !== undefined) {
			this.chain.push(new Properties.MediqChainValue(value));
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

	public grid(grid: 0 | 1): this {
		return this.feature(Features.grid, grid === 0 ? 0 : grid === 1 ? 1 : 0);
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

	public colorIndex(colorIndex: number): this {
		return this.feature(Features.colorIndex, colorIndex);
	}

	public get displayMode(): Keywords.MediqDisplayMode {
		this.feature(Features.displayMode);
		return new Keywords.MediqDisplayMode(this);
	}

	public monochrome(monochrome: 0 | 1): this {
		return this.feature(Features.monochrome, monochrome === 0 ? 0 : monochrome === 1 ? 1 : 0);
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
