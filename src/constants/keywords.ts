export enum OrientationKeywords {
	portrait = 'portrait',
	landscape = 'landscape',
}

export const Keywords = {
	...OrientationKeywords,
};
export type Keywords = (typeof Keywords)[keyof typeof Keywords];
