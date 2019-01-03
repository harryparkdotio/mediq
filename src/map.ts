// tslint:disable-next-line:no-namespace
export namespace Units {
  export enum Length {
    em,
    rem,
    vh,
    vw,
    px,
    cm,
    mm,
    in,
    pc,
    pt,
  }

  export enum Resolution {
    dpi,
    dpcm,
    dppx,
    x,
  }
}

// tslint:disable-next-line:no-namespace
export namespace Keywords {
  export enum DisplayMode {
    fullscreen,
    standalone,
    'minimal-ui',
    browser,
  }

  export enum Hover {
    none,
    hover,
  }

  export enum InvertedColors {
    none,
    inverted,
  }

  export enum LightLevel {
    dim,
    normal,
    washed,
  }

  export enum Orientation {
    portrait,
    landscape,
  }

  export enum OverflowBlock {
    none,
    scroll,
    'optional-paged',
    paged,
  }
  export enum Pointer {
    none,
    scroll,
  }
  export enum PrefersReducedMotion {
    reduce,
    'no-preference',
  }
  export enum Scan {
    interface,
    progressive,
  }
  export enum Scripting {
    none,
    'initial-only',
    enabled,
  }
  export enum Update {
    none,
    slow,
    fast,
  }
  export enum ColorGamut {
    srgb,
    p3,
    rec2020,
  }
  export enum OverflowInline {
    none,
    scroll,
  }
}

interface IFeatureMap {
  // tslint:disable-next-line:ban-types
  function?: Function;
  units?: string[];
  keywords?: string[];
}

export const types: string[] = ['all', 'print', 'screen', 'speech'];
export const operators: string[] = ['and', 'not', 'only', 'or']; // or == ','
export const operatorMap = { or: ',' };

export const prefixes: string[] = ['min', 'max'];

export const features: { [feature: string]: IFeatureMap } = {
  width: {
    function: (width: number) => width,
    units: Object.keys(Units.Length),
  },
  height: {
    function: (height: number) => height,
    units: Object.keys(Units.Length),
  },
  aspectRatio: {
    function: (aOrRatio: string | number, b?: number): string => {
      if (typeof aOrRatio === 'number' && typeof b === 'number') {
        return `${aOrRatio}/${b}`;
      } else if (typeof aOrRatio === 'string') {
        return aOrRatio;
      }

      throw new Error('aspectRatio must be called with a string, or two numbers');
    },
  },
  orientation: {
    keywords: Object.keys(Keywords.Orientation),
  },
  resolution: {
    function: (resolution: number) => resolution,
    units: Object.keys(Units.Resolution),
  },
  scan: {
    keywords: Object.keys(Keywords.Scan),
  },
  grid: {
    function: (grid: 0 | 1) => (grid === 1 ? 1 : 0),
  },
  update: {
    keywords: Object.keys(Keywords.Update),
  },
  overflowBlock: {
    keywords: Object.keys(Keywords.OverflowBlock),
  },
  overflowInline: {
    keywords: Object.keys(Keywords.OverflowInline),
  },
  color: {
    function: (bits: number) => bits,
  },
  colorGamut: {
    keywords: Object.keys(Keywords.ColorGamut),
  },
  colorIndex: {
    function: (colorIndex: number) => colorIndex,
  },
  displayMode: {
    keywords: Object.keys(Keywords.DisplayMode),
  },
  monochrome: {
    function: (monochrome: 0 | 1) => (monochrome === 1 ? 1 : 0),
  },
  invertedColors: {
    keywords: Object.keys(Keywords.InvertedColors),
  },
  anyPointer: {
    keywords: Object.keys(Keywords.Pointer),
  },
  pointer: {
    keywords: Object.keys(Keywords.Pointer),
  },
  anyHover: {
    keywords: Object.keys(Keywords.Hover),
  },
  hover: {
    keywords: Object.keys(Keywords.Hover),
  },
  lightLevel: {
    keywords: Object.keys(Keywords.LightLevel),
  },
  prefersReducedMotion: {
    keywords: Object.keys(Keywords.PrefersReducedMotion),
  },
  scripting: {
    keywords: Object.keys(Keywords.Scripting),
  },
};
