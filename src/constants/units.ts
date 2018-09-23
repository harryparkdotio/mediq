export enum LengthUnits {
	em = 'em',
	rem = 'rem',
	vh = 'vh',
	vw = 'vw',
	px = 'px',
	cm = 'cm',
	mm = 'mm',
	in = 'in',
	pc = 'pc',
	pt = 'pt',
}

export enum ResolutionUnits {
	dpi = 'dpi',
	dpcm = 'dpcm',
	dppx = 'dppx',
	x = 'x',
}

export const Units = {
	...LengthUnits,
	...ResolutionUnits,
};
export type Units = (typeof Units)[keyof typeof Units];
