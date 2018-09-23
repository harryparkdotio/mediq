import * as Keywords from '../../src/keywords';
import { mediq, Mediq } from '../../src/mediq';
import { MediqLength } from '../../src/units/length';
import { MediqResolution } from '../../src/units/resolution';

describe('mediq', () => {
	it('should return a new instance of Mediq', () => {
		expect(mediq()).toBeInstanceOf(Mediq);
	});
});

describe('operators', () => {
	describe('and', () => {
		it('should add operator', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.and;
			expect(m.chain).toEqual(['and']);
		});
	});

	describe('not', () => {
		it('should add operator', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.not;
			expect(m.chain).toEqual(['not']);
		});
	});

	describe('only', () => {
		it('should add operator', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.only;
			expect(m.chain).toEqual(['only']);
		});
	});

	describe('or', () => {
		it('should add operator', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.or;
			expect(m.chain).toEqual(['or']);
		});
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
			expect(m.orientation).toBeInstanceOf(Keywords.MediqOrientation);
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

	describe('scan', () => {
		it('should set scan', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.scan;
			expect(m.chain).toEqual(['scan']);
		});

		it('should return MediqScan instance', () => {
			const m = mediq();
			expect(m.scan).toBeInstanceOf(Keywords.MediqScan);
		});
	});

	describe('grid', () => {
		it('should set grid 0', () => {
			const m = mediq();
			m.grid(0);
			expect(m.chain).toEqual(['grid', 0]);
		});

		it('should set grid 1', () => {
			const m = mediq();
			m.grid(1);
			expect(m.chain).toEqual(['grid', 1]);
		});

		it('should set grid 0 if invalid param provided', () => {
			const m = mediq();
			// @ts-ignore
			m.grid(2);
			expect(m.chain).toEqual(['grid', 0]);
		});

		it('should return Mediq instance', () => {
			const m = mediq();
			expect(m.grid(0)).toBe(m);
		});
	});

	describe('update', () => {
		it('should set update', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.update;
			expect(m.chain).toEqual(['update']);
		});

		it('should return MediqUpdate instance', () => {
			const m = mediq();
			expect(m.update).toBeInstanceOf(Keywords.MediqUpdate);
		});
	});

	describe('overflow-block', () => {
		it('should set overflow-block', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.overflowBlock;
			expect(m.chain).toEqual(['overflow-block']);
		});

		it('should return MediqOverflowBlock instance', () => {
			const m = mediq();
			expect(m.overflowBlock).toBeInstanceOf(Keywords.MediqOverflowBlock);
		});
	});

	describe('overflow-inline', () => {
		it('should set overflow-inline', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.overflowInline;
			expect(m.chain).toEqual(['overflow-inline']);
		});

		it('should return MediqOverflowInline instance', () => {
			const m = mediq();
			expect(m.overflowInline).toBeInstanceOf(Keywords.MediqOverflowInline);
		});
	});

	describe('color', () => {
		it('should set color', () => {
			const m = mediq();
			m.color(8);
			expect(m.chain).toEqual(['color', 8]);
		});

		it('should return Mediq instance', () => {
			const m = mediq();
			expect(m.color(8)).toBe(m);
		});
	});

	describe('color-gamut', () => {
		it('should set color-gamut', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.colorGamut;
			expect(m.chain).toEqual(['color-gamut']);
		});

		it('should return MediqColorGamut instance', () => {
			const m = mediq();
			expect(m.colorGamut).toBeInstanceOf(Keywords.MediqColorGamut);
		});
	});

	describe('color-index', () => {
		it('should set color-index', () => {
			const m = mediq();
			m.colorIndex(10);
			expect(m.chain).toEqual(['color-index', 10]);
		});

		it('should return Mediq instance', () => {
			const m = mediq();
			expect(m.colorIndex(10)).toBe(m);
		});
	});

	describe('display-mode', () => {
		it('should set display-mode', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.displayMode;
			expect(m.chain).toEqual(['display-mode']);
		});

		it('should return MediqDisplayMode instance', () => {
			const m = mediq();
			expect(m.displayMode).toBeInstanceOf(Keywords.MediqDisplayMode);
		});
	});

	describe('monochrome', () => {
		it('should set monochrome 0', () => {
			const m = mediq();
			m.monochrome(0);
			expect(m.chain).toEqual(['monochrome', 0]);
		});

		it('should set monochrome 1', () => {
			const m = mediq();
			m.monochrome(1);
			expect(m.chain).toEqual(['monochrome', 1]);
		});

		it('should set monochrome 0 if invalid param provided', () => {
			const m = mediq();
			// @ts-ignore
			m.monochrome(2);
			expect(m.chain).toEqual(['monochrome', 0]);
		});

		it('should return Mediq instance', () => {
			const m = mediq();
			expect(m.monochrome(0)).toBe(m);
		});
	});

	describe('inverted-colors', () => {
		it('should set inverted-colors', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.invertedColors;
			expect(m.chain).toEqual(['inverted-colors']);
		});

		it('should return MediqInvertedColors instance', () => {
			const m = mediq();
			expect(m.invertedColors).toBeInstanceOf(Keywords.MediqInvertedColors);
		});
	});

	describe('any-pointer', () => {
		it('should set any-pointer', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.anyPointer;
			expect(m.chain).toEqual(['any-pointer']);
		});

		it('should return MediqPointer instance', () => {
			const m = mediq();
			expect(m.anyPointer).toBeInstanceOf(Keywords.MediqPointer);
		});
	});

	describe('pointer', () => {
		it('should set pointer', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.pointer;
			expect(m.chain).toEqual(['pointer']);
		});

		it('should return MediqPointer instance', () => {
			const m = mediq();
			expect(m.pointer).toBeInstanceOf(Keywords.MediqPointer);
		});
	});

	describe('any-hover', () => {
		it('should set any-hover', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.anyHover;
			expect(m.chain).toEqual(['any-hover']);
		});

		it('should return MediqHover instance', () => {
			const m = mediq();
			expect(m.anyHover).toBeInstanceOf(Keywords.MediqHover);
		});
	});

	describe('hover', () => {
		it('should set hover', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.hover;
			expect(m.chain).toEqual(['hover']);
		});

		it('should return MediqHover instance', () => {
			const m = mediq();
			expect(m.hover).toBeInstanceOf(Keywords.MediqHover);
		});
	});

	describe('light-level', () => {
		it('should set light-level', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.lightLevel;
			expect(m.chain).toEqual(['light-level']);
		});

		it('should return MediqLightLevel instance', () => {
			const m = mediq();
			expect(m.lightLevel).toBeInstanceOf(Keywords.MediqLightLevel);
		});
	});

	describe('prefers-reduced-motion', () => {
		it('should set prefers-reduced-motion', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.prefersReducedMotion;
			expect(m.chain).toEqual(['prefers-reduced-motion']);
		});

		it('should return MediqPrefersReducedMotion instance', () => {
			const m = mediq();
			expect(m.prefersReducedMotion).toBeInstanceOf(Keywords.MediqPrefersReducedMotion);
		});
	});

	describe('scripting', () => {
		it('should set scripting', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.scripting;
			expect(m.chain).toEqual(['scripting']);
		});

		it('should return MediqScripting instance', () => {
			const m = mediq();
			expect(m.scripting).toBeInstanceOf(Keywords.MediqScripting);
		});
	});
});
