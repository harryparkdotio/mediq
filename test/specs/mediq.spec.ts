import { features } from '../../src/map';
import { mediq } from '../../src/mediq';

describe('prototype functions', () => {
  describe('.toString', () => {
    it('should call .exec', () => {
      const m = mediq();
      jest.spyOn(m, 'exec');

      m.toString();

      expect(m.exec).toHaveBeenCalled();
    });

    it('should return assembled media query', () => {
      const m = mediq();
      const query = m.screen.and.min.width(200).px;
      expect(query.toString()).toBe('@media screen and (min-width: 200px)');
    });
  });

  describe('.valueOf', () => {
    it('should call .exec', () => {
      const m = mediq();
      jest.spyOn(m, 'exec');

      m.valueOf();

      expect(m.exec).toHaveBeenCalled();
    });

    it('should return assembled media query', () => {
      const m = mediq();
      const query = m.screen.and.min.width(200).px;
      expect(query.valueOf()).toBe('@media screen and (min-width: 200px)');
    });
  });

  describe('.toJSON', () => {
    it('should call .exec', () => {
      const m = mediq();
      jest.spyOn(m, 'exec');

      m.toJSON();

      expect(m.exec).toHaveBeenCalled();
    });

    it('should return assembled media query', () => {
      const m = mediq();
      const query = m.screen.and.min.width(200).px;
      expect(query.toJSON()).toBe('@media screen and (min-width: 200px)');
    });
  });

  describe('.length', () => {
    it('should call .exec', () => {
      const m = mediq();
      jest.spyOn(m, 'exec');

      // tslint:disable-next-line:no-unused-expression
      m.length;

      expect(m.exec).toHaveBeenCalled();
    });

    it('should return assembled media query', () => {
      const m = mediq();
      const query = m.screen.and.min.width(200).px;
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
    it('should return assembled media query', () => {
      const m = mediq();
      const query = m.screen.and.min.width(200).px;
      expect(query.toString()).toBe('@media screen and (min-width: 200px)');
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

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('all', m);
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

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('print', m);
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

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('screen', m);
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

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('speech', m);
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

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('and', m);
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

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('not', m);
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

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('only', m);
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

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('or', m);
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

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('min', m);
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

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('max', m);
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

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('width');
    });

    it('should return units', () => {
      const unts = features.width.units;
      const m = mediq();
      Object.keys(unts).map(u => expect(m.width(100)).toHaveProperty(u, m));
      expect.assertions(Object.keys(unts).length);
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

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('height');
    });

    it('should return units', () => {
      const unts = features.height.units;
      const m = mediq();
      Object.keys(unts).map(u => expect(m.height(100)).toHaveProperty(u, m));
      expect.assertions(Object.keys(unts).length);
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

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('aspectRatio');
    });

    it('should throw if invalid params provided', () => {
      // @ts-ignore
      expect(() => mediq().aspectRatio(1, '2')).toThrow();
    });

    it('should return this', () => {
      const m = mediq();
      expect(m.aspectRatio(1, 2)).toBe(m);
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

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('orientation');
    });

    it('should return keywords', () => {
      const kwds = features.orientation.keywords;
      const m = mediq();
      Object.keys(kwds).map(u => expect(m.orientation).toHaveProperty(u, m));
      expect.assertions(Object.keys(kwds).length);
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

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('resolution');
    });

    it('should return units', () => {
      const unts = features.resolution.units;
      const m = mediq();
      Object.keys(unts).map(u => expect(m.resolution(100)).toHaveProperty(u, m));
      expect.assertions(Object.keys(unts).length);
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

    it('should return keywords', () => {
      const kwds = features.scan.keywords;
      const m = mediq();
      Object.keys(kwds).map(u => expect(m.scan).toHaveProperty(u, m));
      expect.assertions(Object.keys(kwds).length);
    });

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('scan');
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

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('grid');
    });

    it('should return this', () => {
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

    it('should return keywords', () => {
      const kwds = features.update.keywords;
      const m = mediq();
      Object.keys(kwds).map(u => expect(m.update).toHaveProperty(u, m));
      expect.assertions(Object.keys(kwds).length);
    });

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('update');
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

    it('should return keywords', () => {
      const kwds = features.overflowBlock.keywords;
      const m = mediq();
      Object.keys(kwds).map(u => expect(m.overflowBlock).toHaveProperty(u, m));
      expect.assertions(Object.keys(kwds).length);
    });

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('overflowBlock');
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

    it('should return keywords', () => {
      const kwds = features.overflowInline.keywords;
      const m = mediq();
      Object.keys(kwds).map(u => expect(m.overflowInline).toHaveProperty(u, m));
      expect.assertions(Object.keys(kwds).length);
    });

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('overflowInline');
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

    it('should return this', () => {
      const m = mediq();
      expect(m.color(8)).toBe(m);
    });

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('color');
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

    it('should return keywords', () => {
      const kwds = features.colorGamut.keywords;
      const m = mediq();
      Object.keys(kwds).map(u => expect(m.colorGamut).toHaveProperty(u, m));
      expect.assertions(Object.keys(kwds).length);
    });

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('colorGamut');
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

    it('should return this', () => {
      const m = mediq();
      expect(m.colorIndex(10)).toBe(m);
    });

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('colorIndex');
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

    it('should return keywords', () => {
      const kwds = features.displayMode.keywords;
      const m = mediq();
      Object.keys(kwds).map(u => expect(m.displayMode).toHaveProperty(u, m));
      expect.assertions(Object.keys(kwds).length);
    });

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('displayMode');
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

    it('should return this', () => {
      const m = mediq();
      expect(m.monochrome(0)).toBe(m);
    });

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('monochrome');
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

    it('should return keywords', () => {
      const kwds = features.invertedColors.keywords;
      const m = mediq();
      Object.keys(kwds).map(u => expect(m.invertedColors).toHaveProperty(u, m));
      expect.assertions(Object.keys(kwds).length);
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

    it('should return keywords', () => {
      const kwds = features.anyPointer.keywords;
      const m = mediq();
      Object.keys(kwds).map(u => expect(m.anyPointer).toHaveProperty(u, m));
      expect.assertions(Object.keys(kwds).length);
    });

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('anyPointer');
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

    it('should return keywords', () => {
      const kwds = features.pointer.keywords;
      const m = mediq();
      Object.keys(kwds).map(u => expect(m.pointer).toHaveProperty(u, m));
      expect.assertions(Object.keys(kwds).length);
    });

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('pointer');
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

    it('should return keywords', () => {
      const kwds = features.anyHover.keywords;
      const m = mediq();
      Object.keys(kwds).map(u => expect(m.anyHover).toHaveProperty(u, m));
      expect.assertions(Object.keys(kwds).length);
    });

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('anyHover');
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

    it('should return keywords', () => {
      const kwds = features.hover.keywords;
      const m = mediq();
      Object.keys(kwds).map(u => expect(m.hover).toHaveProperty(u, m));
      expect.assertions(Object.keys(kwds).length);
    });

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('hover');
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

    it('should return keywords', () => {
      const kwds = features.lightLevel.keywords;
      const m = mediq();
      Object.keys(kwds).map(u => expect(m.lightLevel).toHaveProperty(u, m));
      expect.assertions(Object.keys(kwds).length);
    });

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('lightLevel');
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

    it('should return keywords', () => {
      const kwds = features.prefersReducedMotion.keywords;
      const m = mediq();
      Object.keys(kwds).map(u => expect(m.prefersReducedMotion).toHaveProperty(u, m));
      expect.assertions(Object.keys(kwds).length);
    });

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('prefersReducedMotion');
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

    it('should return keywords', () => {
      const kwds = features.scripting.keywords;
      const m = mediq();
      Object.keys(kwds).map(u => expect(m.scripting).toHaveProperty(u, m));
      expect.assertions(Object.keys(kwds).length);
    });

    it('should be a property', () => {
      const m = mediq();
      expect(m).toHaveProperty('scripting');
    });
  });
});
