import { paramCase } from 'change-case';
import { ChainType, MediqAssembler } from './assembler';
import { features, Keywords, operatorMap, operators, prefixes, types, Units } from './map';

// tslint:disable-next-line:no-namespace
export namespace Types {
  export type Length<T> = { [U in keyof typeof Units.Length]: T };
  export type Resolution<T> = { [U in keyof typeof Units.Resolution]: T };
  export type Orientation<T> = { [K in keyof typeof Keywords.Orientation]: T };
  export type Scan<T> = { [K in keyof typeof Keywords.Scan]: T };
  export type Update<T> = { [K in keyof typeof Keywords.Update]: T };
  export type ColorGamut<T> = { [K in keyof typeof Keywords.ColorGamut]: T };
  export type OverflowBlock<T> = { [K in keyof typeof Keywords.OverflowBlock]: T };
  export type OverflowInline<T> = { [K in keyof typeof Keywords.OverflowInline]: T };
  export type DisplayMode<T> = { [K in keyof typeof Keywords.DisplayMode]: T };
  export type Pointer<T> = { [K in keyof typeof Keywords.Pointer]: T };
  export type InvertedColors<T> = { [K in keyof typeof Keywords.InvertedColors]: T };
  export type Hover<T> = { [K in keyof typeof Keywords.Hover]: T };
  export type LightLevel<T> = { [K in keyof typeof Keywords.LightLevel]: T };
  export type PrefersReducedMotion<T> = { [K in keyof typeof Keywords.PrefersReducedMotion]: T };
  export type Scripting<T> = { [K in keyof typeof Keywords.Scripting]: T };
}

export interface IChain {
  type: ChainType;
  value: string | number;
}

export interface IMediq {
  chain: IChain[];

  exec(): string;
  toString(): string;
  valueOf(): string;
  toJSON(): string;
  length: number;

  all: this;
  print: this;
  screen: this;
  speech: this;

  and: this;
  not: this;
  only: this;
  or: this;

  min: this;
  max: this;

  width(width: number): Types.Length<this>;
  height(height: number): Types.Length<this>;
  aspectRatio(a: number, b: number): this;
  aspectRatio(ratio: string): this;
  orientation: Types.Orientation<this>;
  resolution(resolution: number): Types.Resolution<this>;
  scan: Types.Scan<this>;
  grid(grid: 0 | 1): this;
  update: Types.Update<this>;
  overflowBlock: Types.OverflowBlock<this>;
  overflowInline: Types.OverflowInline<this>;
  color(bits: number): this;
  colorGamut: Types.ColorGamut<this>;
  colorIndex(colorIndex: number): this;
  displayMode: Types.DisplayMode<this>;
  monochrome(monochrome: 0 | 1): this;
  invertedColors: Types.InvertedColors<this>;
  anyPointer: Types.Pointer<this>;
  pointer: Types.Pointer<this>;
  anyHover: Types.Hover<this>;
  hover: Types.Hover<this>;
  lightLevel: Types.LightLevel<this>;
  prefersReducedMotion: Types.PrefersReducedMotion<this>;
  scripting: Types.Scripting<this>;
}

export function mediq(): IMediq {
  // @ts-ignore
  return new Mediq();
}

export class Mediq {
  private assembler: MediqAssembler;
  public chain: IChain[];

  constructor() {
    this.assembler = new MediqAssembler();
    this.chain = [];
  }

  private exec(): string {
    return `@media ${this.assembler.assemble(this.chain)}`;
  }

  public toString(): string {
    return this.exec();
  }

  public valueOf(): string {
    return this.exec();
  }

  public toJSON(): string {
    return this.exec();
  }

  public get length(): number {
    return this.exec().length;
  }

  public case(string: string) {
    return paramCase(string);
  }

  public type(type: string) {
    this.chain.push({
      type: ChainType.type,
      value: this.case(type),
    });
  }

  public operator(operator: string) {
    this.chain.push({
      type: ChainType.operator,
      value: operatorMap[operator] || operator,
    });
  }

  public prefix(prefix: string) {
    this.chain.push({
      type: ChainType.prefix,
      value: prefix,
    });
  }

  public feature(feature: string) {
    this.chain.push({
      type: ChainType.feature,
      value: this.case(feature),
    });
  }

  public args(...args: any[]) {
    args.map(arg => this.chain.push({ type: ChainType.value, value: arg }));
  }

  public keyword(keyword: string) {
    this.chain.push({ type: ChainType.keyword, value: this.case(keyword) });
  }

  public units(units: string) {
    this.chain.push({ type: ChainType.unit, value: units });
  }

  public [Symbol.toPrimitive](hint: 'string' | 'number' | 'default') {
    if (hint === 'number') {
      return NaN;
    }

    return this.exec();
  }

  public get [Symbol.toStringTag]() {
    return 'Mediq';
  }
}

function defineGetterProperties<T>(obj: object, properties: string[], getter: (this: T, property: string) => T) {
  properties.map(property => {
    Object.defineProperty(obj, property, {
      get() {
        return getter.call(this, property);
      },
    });
  });

  return obj;
}

defineGetterProperties<Mediq>(Mediq.prototype, types, function(property) {
  this.type(property);
  return this;
});

defineGetterProperties<Mediq>(Mediq.prototype, operators, function(property) {
  this.operator(property);
  return this;
});

defineGetterProperties<Mediq>(Mediq.prototype, prefixes, function(property) {
  this.prefix(property);
  return this;
});

Object.entries(features).map(([feature, map]) => {
  const prop: PropertyDescriptor = {
    get(this: Mediq) {
      const that = this;
      this.feature(feature);

      const keywords = defineGetterProperties<Mediq>({}, map.keywords || [], function(property) {
        that.keyword(property);
        return that;
      });

      const units = defineGetterProperties<Mediq>({}, map.units || [], function(property) {
        that.units(property);
        return that;
      });

      const p = proto(that, map, { keywords, units });

      if (map.function) {
        return (...args: any[]) => {
          that.args(map.function(...args));

          return p;
        };
      }

      return p;
    },
  };

  Object.defineProperty(Mediq.prototype, feature, prop);
});

function proto(that: any, map: any, props: any) {
  if (map.keywords) {
    return props.keywords;
  } else if (map.units) {
    return props.units;
  } else {
    return that;
  }
}
