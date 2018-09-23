import { mediq, Mediq } from '../../src/mediq';
import { MediqLength } from '../../src/units/length';
import { MediqResolution } from '../../src/units/resolution';
import { MediqOrientation } from '../../src/keywords/orientation';

describe('mediq', () => {
	it('should return a new instance of Mediq', () => {
		expect(mediq()).toBeInstanceOf(Mediq);
	});
});

describe('features', () => {
	describe('width', () => {
		it('should set width', () => {
			const m = mediq();
			m.width(200);
			expect(m.chain).toEqual(['width', 200]);
		});

		it('should return MediqLength instance', () => {
			const m = mediq();
			expect(m.width(200)).toBeInstanceOf(MediqLength);
		});
	});

	describe('height', () => {
		it('should set height', () => {
			const m = mediq();
			m.height(200);
			expect(m.chain).toEqual(['height', 200]);
		});

		it('should return MediqLength instance', () => {
			const m = mediq();
			expect(m.height(200)).toBeInstanceOf(MediqLength);
		});
	});

	describe('aspect-ratio', () => {
		it('should set aspect-ratio (string)', () => {
			const m = mediq().aspectRatio('1/2');
			expect(m.chain).toEqual(['aspect-ratio', '1/2']);
		});

		it('should set aspect-ratio (numbers)', () => {
			const m = mediq().aspectRatio(1, 2);
			expect(m.chain).toEqual(['aspect-ratio', '1/2']);
		});

		it('should not set aspect-ratio if invalid params provided', () => {
			// @ts-ignore
			const m = mediq().aspectRatio(1, '2');
			expect(m.chain).toEqual([]);
		});
	});

	describe('orientation', () => {
		it('should set orientation', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.orientation;
			expect(m.chain).toEqual(['orientation']);
		});

		it('should return MediqOrientation instance', () => {
			const m = mediq();
			expect(m.orientation).toBeInstanceOf(MediqOrientation);
		});
	});

	describe('resolution', () => {
		it('should set resolution', () => {
			const m = mediq();
			m.resolution(200);
			expect(m.chain).toEqual(['resolution', 200]);
		});

		it('should return MediqResolution instance', () => {
			const m = mediq();
			expect(m.resolution(200)).toBeInstanceOf(MediqResolution);
		});
	});
});
