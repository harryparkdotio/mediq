// tslint:disable-next-line:no-namespace
export namespace Units {
  export const Length = {
    em: 'em',
    rem: 'rem',
    vh: 'vh',
    vw: 'vw',
    px: 'px',
    cm: 'cm',
    mm: 'mm',
    in: 'in',
    pc: 'pc',
    pt: 'pt',
  };

  export const Resolution = {
    dpi: 'dpi',
    dpcm: 'dpcm',
    dppx: 'dppx',
    x: 'x',
  };
}

// tslint:disable-next-line:no-namespace
export namespace Keywords {
  const none = 'none';
  const scroll = 'scroll';

  export const DisplayMode = {
    fullscreen: 'fullscreen',
    standalone: 'standalone',
    minimalUi: 'minimal-ui',
    browser: 'browser',
  };

  export const Hover = {
    none,
    hover: 'hover',
  };

  export const InvertedColors = {
    none,
    inverted: 'inverted',
  };

  export const LightLevel = {
    dim: 'dim',
    normal: 'normal',
    washed: 'washed',
  };

  export const Orientation = {
    portrait: 'portrait',
    landscape: 'landscape',
  };

  export const OverflowBlock = {
    none,
    scroll,
    paged: 'paged',
    optionalPaged: 'optionalPaged',
  };

  export const Pointer = {
    none,
    scroll,
  };

  export const PrefersReducedMotion = {
    reduce: 'reduce',
    noPreference: 'no-preference',
  };

  export const Scan = {
    interface: 'interface',
    progressive: 'progressive',
  };

  export const Scripting = {
    none,
    initialOnly: 'initial-only',
    enabled: 'enabled',
  };

  export const Update = {
    none,
    slow: 'slow',
    fast: 'fast',
  };

  export const ColorGamut = {
    srgb: 'srgb',
    p3: 'p3',
    rec2020: 'rec2020',
  };

  export const OverflowInline = {
    none,
    scroll,
  };
}

export const types = {
  all: 'all',
  print: 'print',
  screen: 'screen',
  speech: 'speech',
};

export const operators = {
  and: 'and',
  not: 'not',
  only: 'only',
  or: ',',
};

export const prefixes = {
  min: 'min',
  max: 'max',
};

enum Features {
  width,
  height,
  aspectRatio,
  orientation,
  resolution,
  scan,
  grid,
  update,
  overflowBlock,
  overflowInline,
  color,
  colorGamut,
  colorIndex,
  displayMode,
  monochrome,
  invertedColors,
  anyPointer,
  pointer,
  anyHover,
  hover,
  lightLevel,
  prefersReducedMotion,
  scripting,
}

interface IFeature {
  value: string;
  // tslint:disable-next-line:ban-types
  function?: Function;
  units?: { [unit: string]: string };
  keywords?: { [keyword: string]: string };
}

export const features: Record<keyof typeof Features, IFeature> = {
  width: {
    value: 'width',
    function: (width: number) => width,
    units: Units.Length,
  },
  height: {
    value: 'height',
    function: (height: number) => height,
    units: Units.Length,
  },
  aspectRatio: {
    value: 'aspect-ratio',
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
    value: 'orientation',
    keywords: Keywords.Orientation,
  },
  resolution: {
    value: 'resolution',
    function: (resolution: number) => resolution,
    units: Units.Resolution,
  },
  scan: {
    value: 'scan',
    keywords: Keywords.Scan,
  },
  grid: {
    value: 'grid',
    function: (grid: 0 | 1) => (grid === 1 ? 1 : 0),
  },
  update: {
    value: 'update',
    keywords: Keywords.Update,
  },
  overflowBlock: {
    value: 'overflow-block',
    keywords: Keywords.OverflowBlock,
  },
  overflowInline: {
    value: 'overflow-inline',
    keywords: Keywords.OverflowInline,
  },
  color: {
    value: 'color',
    function: (bits: number) => bits,
  },
  colorGamut: {
    value: 'color-gamut',
    keywords: Keywords.ColorGamut,
  },
  colorIndex: {
    value: 'color-index',
    function: (colorIndex: number) => colorIndex,
  },
  displayMode: {
    value: 'display-mode',
    keywords: Keywords.DisplayMode,
  },
  monochrome: {
    value: 'monochrome',
    function: (monochrome: 0 | 1) => (monochrome === 1 ? 1 : 0),
  },
  invertedColors: {
    value: 'inverted-colors',
    keywords: Keywords.InvertedColors,
  },
  anyPointer: {
    value: 'any-pointer',
    keywords: Keywords.Pointer,
  },
  pointer: {
    value: 'pointer',
    keywords: Keywords.Pointer,
  },
  anyHover: {
    value: 'any-hover',
    keywords: Keywords.Hover,
  },
  hover: {
    value: 'hover',
    keywords: Keywords.Hover,
  },
  lightLevel: {
    value: 'light-level',
    keywords: Keywords.LightLevel,
  },
  prefersReducedMotion: {
    value: 'prefers-reduced-motion',
    keywords: Keywords.PrefersReducedMotion,
  },
  scripting: {
    value: 'scripting',
    keywords: Keywords.Scripting,
  },
};
