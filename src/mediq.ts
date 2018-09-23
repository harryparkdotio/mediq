import { Features } from './constants/features';
import { MediqLength } from './units/length';
import { MediqResolution } from './units/resolution';
import { MediqOrientation } from './keywords/orientation';

export function mediq() {
	return new Mediq();
}

export interface IMediqFeatures<T> {
	width(width: number): MediqLength;
	height(height: number): MediqLength;
	aspectRatio(a: number, b: number): T;
	aspectRatio(ratio: string): T;
	orientation: MediqOrientation;
	resolution(resolution: number): MediqResolution;
}

export interface IMediq<T> extends IMediqFeatures<T> {

}

export class Mediq implements IMediq<Mediq> {
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

	public get orientation(): MediqOrientation {
		this.feature(Features.orientation);
		return new MediqOrientation(this);
	}

	public resolution(resolution: number): MediqResolution {
		this.feature(Features.resolution, resolution);
		return new MediqResolution(this);
	}
}
