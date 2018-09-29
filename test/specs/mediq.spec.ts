import { MediqAssembler } from '../../src/assembler';
import * as Keywords from '../../src/keywords';
import { mediq, Mediq } from '../../src/mediq';
import { MediqLength } from '../../src/units/length';
import { MediqResolution } from '../../src/units/resolution';

describe('mediq', () => {
	it('should return a new instance of Mediq', () => {
		expect(mediq()).toBeInstanceOf(Mediq);
	});
});

describe('prototype functions', () => {
	describe('.toString', () => {
		it('should call Mediq.exec', () => {
			const m = mediq();
			jest.spyOn(m, 'exec');

			m.toString();

			expect(m.exec).toHaveBeenCalled();
		});

		it('should return assembled media query', () => {
			const m = mediq();
			const query =  m.screen.and.min.width(200).px;
			expect(query.toString()).toBe('screen and (min-width: 200px)');
		});
	});

	describe('.valueOf', () => {
		it('should call Mediq.exec', () => {
			const m = mediq();
			jest.spyOn(m, 'exec');

			m.valueOf();

			expect(m.exec).toHaveBeenCalled();
		});

		it('should return assembled media query', () => {
			const m = mediq();
			const query =  m.screen.and.min.width(200).px;
			expect(query.valueOf()).toBe('screen and (min-width: 200px)');
		});
	});

	describe('.toJSON', () => {
		it('should call Mediq.exec', () => {
			const m = mediq();
			jest.spyOn(m, 'exec');

			m.toJSON();

			expect(m.exec).toHaveBeenCalled();
		});

		it('should return assembled media query', () => {
			const m = mediq();
			const query =  m.screen.and.min.width(200).px;
			expect(query.toJSON()).toBe('screen and (min-width: 200px)');
		});
	});

	describe('.length', () => {
		it('should call Mediq.exec', () => {
			const m = mediq();
			jest.spyOn(m, 'exec');

			// tslint:disable-next-line:no-unused-expression
			m.length;

			expect(m.exec).toHaveBeenCalled();
		});

		it('should return assembled media query', () => {
			const m = mediq();
			const query =  m.screen.and.min.width(200).px;
			expect(query.length).toBe(query.exec().length);
		});
	});
});

describe('Symbol functions', () => {
	describe('[Symbol.toPrimitive]', () => {
		it('should return assembled media query (query + number)', () => {
			const query = mediq().screen.and.min.width(200).px;
			// @ts-ignore
			expect(query + 1).toBe(`${query.toString()}1`);
		});

		it('should return assembled media query (number + query)', () => {
			const query = mediq().screen.and.min.width(200).px;
			// @ts-ignore
			expect(1 + query).toBe(`1${query.toString()}`);
		});

		it('should return NaN (Number(query))', () => {
			const query = mediq().screen.and.min.width(200).px;
			// @ts-ignore
			expect(Number(query)).toBe(NaN);
		});

		it('should return assembled media query (query + string)', () => {
			const query = mediq().screen.and.min.width(200).px;
			expect(query + '').toBe(query.exec());
		});

		it('should return assembled media query (string + query)', () => {
			const query = mediq().screen.and.min.width(200).px;
			expect('' + query).toBe(query.exec());
		});

		it('should return assembled media query (String(query))', () => {
			const query = mediq().screen.and.min.width(200).px;
			// @ts-ignore
			expect(String(query)).toBe(query.exec());
		});

		it('should call Mediq.exec', () => {
			const m = mediq();
			jest.spyOn(m, 'exec');

			// tslint:disable-next-line:no-unused-expression
			'' + m;

			expect(m.exec).toHaveBeenCalled();
		});
	});

	describe('[Symbol.toStringTag]', () => {
		it('should return [object Mediq]', () => {
			const m = mediq();
			expect(Object.prototype.toString.call(m)).toEqual('[object Mediq]');
		});
	});
});

describe('functions', () => {
	describe('ex', () => {
		it('should call MediqAssembler.assemble', () => {
			const m = mediq();
			jest.spyOn(MediqAssembler.prototype, 'assemble');

			m.exec();

			expect(MediqAssembler.prototype.assemble).toHaveBeenCalled();
		});
	});
});

describe('types', () => {
	describe('all', () => {
		it('should add type', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.all;
			expect(m.chain[0].type).toEqual('type');
			expect(m.chain[0].value).toEqual('all');
			expect(m.chain).toHaveLength(1);
		});
	});

	describe('print', () => {
		it('should add type', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.print;
			expect(m.chain[0].type).toEqual('type');
			expect(m.chain[0].value).toEqual('print');
			expect(m.chain).toHaveLength(1);
		});
	});

	describe('screen', () => {
		it('should add type', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.screen;
			expect(m.chain[0].type).toEqual('type');
			expect(m.chain[0].value).toEqual('screen');
			expect(m.chain).toHaveLength(1);
		});
	});

	describe('speech', () => {
		it('should add type', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.speech;
			expect(m.chain[0].type).toEqual('type');
			expect(m.chain[0].value).toEqual('speech');
			expect(m.chain).toHaveLength(1);
		});
	});
});

describe('operators', () => {
	describe('and', () => {
		it('should add operator', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.and;
			expect(m.chain[0].type).toEqual('operator');
			expect(m.chain[0].value).toEqual('and');
			expect(m.chain).toHaveLength(1);
		});
	});

	describe('not', () => {
		it('should add operator', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.not;
			expect(m.chain[0].type).toEqual('operator');
			expect(m.chain[0].value).toEqual('not');
			expect(m.chain).toHaveLength(1);
		});
	});

	describe('only', () => {
		it('should add operator', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.only;
			expect(m.chain[0].type).toEqual('operator');
			expect(m.chain[0].value).toEqual('only');
			expect(m.chain).toHaveLength(1);
		});
	});

	describe('or', () => {
		it('should add operator', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.or;
			expect(m.chain[0].type).toEqual('operator');
			expect(m.chain[0].value).toEqual(',');
			expect(m.chain).toHaveLength(1);
		});
	});
});

describe('prefixes', () => {
	describe('min', () => {
		it('should add prefix', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.min;
			expect(m.chain[0].type).toEqual('prefix');
			expect(m.chain[0].value).toEqual('min');
			expect(m.chain).toHaveLength(1);
		});
	});

	describe('max', () => {
		it('should add prefix', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.max;
			expect(m.chain[0].type).toEqual('prefix');
			expect(m.chain[0].value).toEqual('max');
			expect(m.chain).toHaveLength(1);
		});
	});
});

describe('features', () => {
	describe('width', () => {
		it('should set width', () => {
			const m = mediq();
			m.width(200);
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('width');
			expect(m.chain[1].type).toEqual('value');
			expect(m.chain[1].value).toEqual(200);
			expect(m.chain).toHaveLength(2);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('height');
			expect(m.chain[1].type).toEqual('value');
			expect(m.chain[1].value).toEqual(200);
			expect(m.chain).toHaveLength(2);
		});

		it('should return MediqLength instance', () => {
			const m = mediq();
			expect(m.height(200)).toBeInstanceOf(MediqLength);
		});
	});

	describe('aspect-ratio', () => {
		it('should set aspect-ratio (string)', () => {
			const m = mediq().aspectRatio('1/2');
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('aspect-ratio');
			expect(m.chain[1].type).toEqual('value');
			expect(m.chain[1].value).toEqual('1/2');
			expect(m.chain).toHaveLength(2);
		});

		it('should set aspect-ratio (numbers)', () => {
			const m = mediq().aspectRatio(1, 2);
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('aspect-ratio');
			expect(m.chain[1].type).toEqual('value');
			expect(m.chain[1].value).toEqual('1/2');
			expect(m.chain).toHaveLength(2);
		});

		it('should not set aspect-ratio if invalid params provided', () => {
			// @ts-ignore
			const m = mediq().aspectRatio(1, '2');
			expect(m.chain).toHaveLength(0);
		});
	});

	describe('orientation', () => {
		it('should set orientation', () => {
			const m = mediq();
			// tslint:disable-next-line:no-unused-expression
			m.orientation;
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('orientation');
			expect(m.chain).toHaveLength(1);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('resolution');
			expect(m.chain[1].type).toEqual('value');
			expect(m.chain[1].value).toEqual(200);
			expect(m.chain).toHaveLength(2);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('scan');
			expect(m.chain).toHaveLength(1);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('grid');
			expect(m.chain[1].type).toEqual('value');
			expect(m.chain[1].value).toEqual(0);
			expect(m.chain).toHaveLength(2);
		});

		it('should set grid 1', () => {
			const m = mediq();
			m.grid(1);
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('grid');
			expect(m.chain[1].type).toEqual('value');
			expect(m.chain[1].value).toEqual(1);
			expect(m.chain).toHaveLength(2);
		});

		it('should set grid 0 if invalid param provided', () => {
			const m = mediq();
			// @ts-ignore
			m.grid(2);
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('grid');
			expect(m.chain[1].type).toEqual('value');
			expect(m.chain[1].value).toEqual(0);
			expect(m.chain).toHaveLength(2);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('update');
			expect(m.chain).toHaveLength(1);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('overflow-block');
			expect(m.chain).toHaveLength(1);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('overflow-inline');
			expect(m.chain).toHaveLength(1);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('color');
			expect(m.chain[1].type).toEqual('value');
			expect(m.chain[1].value).toEqual(8);
			expect(m.chain).toHaveLength(2);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('color-gamut');
			expect(m.chain).toHaveLength(1);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('color-index');
			expect(m.chain[1].type).toEqual('value');
			expect(m.chain[1].value).toEqual(10);
			expect(m.chain).toHaveLength(2);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('display-mode');
			expect(m.chain).toHaveLength(1);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('monochrome');
			expect(m.chain[1].type).toEqual('value');
			expect(m.chain[1].value).toEqual(0);
			expect(m.chain).toHaveLength(2);
		});

		it('should set monochrome 1', () => {
			const m = mediq();
			m.monochrome(1);
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('monochrome');
			expect(m.chain[1].type).toEqual('value');
			expect(m.chain[1].value).toEqual(1);
			expect(m.chain).toHaveLength(2);
		});

		it('should set monochrome 0 if invalid param provided', () => {
			const m = mediq();
			// @ts-ignore
			m.monochrome(2);
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('monochrome');
			expect(m.chain[1].type).toEqual('value');
			expect(m.chain[1].value).toEqual(0);
			expect(m.chain).toHaveLength(2);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('inverted-colors');
			expect(m.chain).toHaveLength(1);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('any-pointer');
			expect(m.chain).toHaveLength(1);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('pointer');
			expect(m.chain).toHaveLength(1);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('any-hover');
			expect(m.chain).toHaveLength(1);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('hover');
			expect(m.chain).toHaveLength(1);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('light-level');
			expect(m.chain).toHaveLength(1);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('prefers-reduced-motion');
			expect(m.chain).toHaveLength(1);
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
			expect(m.chain[0].type).toEqual('feature');
			expect(m.chain[0].value).toEqual('scripting');
			expect(m.chain).toHaveLength(1);
		});

		it('should return MediqScripting instance', () => {
			const m = mediq();
			expect(m.scripting).toBeInstanceOf(Keywords.MediqScripting);
		});
	});
});
