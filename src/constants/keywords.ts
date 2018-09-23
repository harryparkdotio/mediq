export enum ColorGamutKeywords {
	srgb = 'srgb',
	p3 = 'p3',
	rec2020 = 'rec2020',
}

export enum DisplayModeKeywords {
	fullscreen = 'fullscreen',
	standalone = 'standalone',
	minimalUi = 'minimal-ui',
	browser = 'browser',
}

export enum HoverKeywords {
	none = 'none',
	hover = 'hover',
}

export enum InvertedColorsKeywords {
	none = 'none',
	inverted = 'inverted',
}

export enum LightLevelKeywords {
	dim = 'dim',
	normal = 'normal',
	washed = 'washed',
}

export enum OrientationKeywords {
	portrait = 'portrait',
	landscape = 'landscape',
}

export enum OverflowBlockKeywords {
	none = 'none',
	scroll = 'scroll',
	optionalPaged = 'optional-paged',
	paged = 'paged',
}

export enum OverflowInlineKeywords {
	none = 'none',
	scroll = 'scroll',
}

export enum PointerKeywords {
	none = 'none',
	coarse = 'coarse',
	fine = 'fine',
}

export enum PrefersReduceMotionKeywords {
	noPreference = 'no-preference',
	reduce = 'reduce',
}

export enum ScanKeywords {
	interlace = 'interlace',
	progressive = 'progressive',
}

export enum ScriptingKeywords {
	none = 'none',
	initialOnly = 'initial-only',
	enabled = 'enabled',
}

export enum UpdateKeywords {
	none = 'none',
	slow = 'slow',
	fast = 'fast',
}

export const Keywords = {
	...ColorGamutKeywords,
	...DisplayModeKeywords,
	...HoverKeywords,
	...InvertedColorsKeywords,
	...LightLevelKeywords,
	...OrientationKeywords,
	...OverflowBlockKeywords,
	...OverflowInlineKeywords,
	...PointerKeywords,
	...PrefersReduceMotionKeywords,
	...ScanKeywords,
	...ScriptingKeywords,
	...UpdateKeywords,
};
export type Keywords = (typeof Keywords)[keyof typeof Keywords];
