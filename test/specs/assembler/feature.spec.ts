import { MediqFeatureAssembler } from '../../../src/assembler/feature';
import { Properties } from '../../../src/chain';
import { Features } from '../../../src/constants/features';
import { Keywords } from '../../../src/constants/keywords';
import { Prefixes } from '../../../src/constants/prefixes';
import { Units } from '../../../src/constants/units';
import { Mediq } from '../../../src/mediq';

import * as generate from '../../utils/generate-properties';

const features = [generate.feature()];
const keywords = [generate.keyword()];
const prefixes = [generate.prefix()];
const values = [generate.value()];
const units = [generate.unit()];

// #region groupFeatures cases
const groupFeaturesCases = [
	[
		'single feature + keyword',
		[
			features[0],
			keywords[0],
		],
		[
			[
				features[0],
				keywords[0],
			],
		],
	],
	[
		'single feature + value + units',
		[
			features[0],
			values[0],
			units[0],
		],
		[
			[
				features[0],
				values[0],
				units[0],
			],
		],
	],
	[
		'single prefix + feature + value + units',
		[
			prefixes[0],
			features[0],
			values[0],
			units[0],
		],
		[
			[
				prefixes[0],
				features[0],
				values[0],
				units[0],
			],
		],
	],
	[
		'3x feature + keyword',
		[
			features[0],
			keywords[0],
			features[0],
			keywords[0],
			features[0],
			keywords[0],
		],
		[
			[
				features[0],
				keywords[0],
			],
			[
				features[0],
				keywords[0],
			],
			[
				features[0],
				keywords[0],
			],
		],
	],
	[
		'3x feature + value + units',
		[
			features[0],
			values[0],
			units[0],
			features[0],
			values[0],
			units[0],
			features[0],
			values[0],
			units[0],
		],
		[
			[
				features[0],
				values[0],
				units[0],
			],
			[
				features[0],
				values[0],
				units[0],
			],
			[
				features[0],
				values[0],
				units[0],
			],
		],
	],
	[
		'3x prefix + feature + value + units',
		[
			prefixes[0],
			features[0],
			values[0],
			units[0],
			prefixes[0],
			features[0],
			values[0],
			units[0],
			prefixes[0],
			features[0],
			values[0],
			units[0],
		],
		[
			[
				prefixes[0],
				features[0],
				values[0],
				units[0],
			],
			[
				prefixes[0],
				features[0],
				values[0],
				units[0],
			],
			[
				prefixes[0],
				features[0],
				values[0],
				units[0],
			],
		],
	],
	[
		'3x mixed',
		[
			prefixes[0],
			features[0],
			values[0],
			units[0],
			features[0],
			values[0],
			units[0],
			features[0],
			keywords[0],
		],
		[
			[
				prefixes[0],
				features[0],
				values[0],
				units[0],
			],
			[
				features[0],
				values[0],
				units[0],
			],
			[
				features[0],
				keywords[0],
			],
		],
	],
];
// #endregion

describe('MediqFeatureAssembler', () => {
	describe('groupFeatures', () => {
		it.each(groupFeaturesCases)('should return grouped array (%s)', (name, flat, grouped) => {
			const m = new Mediq();
			const ma = new MediqFeatureAssembler(m);

			m.chain.push(...flat);

			expect(ma.groupFeatures()).toEqual(grouped);
		});
	});

	describe('assembleFeatures', () => {
		it('should call assembleFeature on each group', () => {
			const m = new Mediq();
			const ma = new MediqFeatureAssembler(m);

			const spy = jest.spyOn(ma, 'assembleFeature');

			ma.assembleFeatures([[], [], []]);

			expect(ma.assembleFeature).toHaveBeenCalledTimes(3);
			spy.mockRestore();
		});
	});

	describe('assembleFeature', () => {
		it('should assemble feature group (feature + keyword)', () => {
			const m = new Mediq();
			const ma = new MediqFeatureAssembler(m);

			const group = [
				new Properties.MediqChainFeature(Features.orientation),
				new Properties.MediqChainKeyword(Keywords.landscape),
			];

			expect(ma.assembleFeature(group)).toEqual('orientation: landscape');
		});

		it('should assemble feature group (feature + value + unit)', () => {
			const m = new Mediq();
			const ma = new MediqFeatureAssembler(m);

			const group = [
				new Properties.MediqChainFeature(Features.height),
				new Properties.MediqChainValue(200),
				new Properties.MediqChainUnit(Units.px),
			];

			expect(ma.assembleFeature(group)).toEqual('height: 200px');
		});

		it('should assemble feature group (prefix + feature + value + unit)', () => {
			const m = new Mediq();
			const ma = new MediqFeatureAssembler(m);

			const group = [
				new Properties.MediqChainPrefix(Prefixes.min),
				new Properties.MediqChainFeature(Features.width),
				new Properties.MediqChainValue(20),
				new Properties.MediqChainUnit(Units.em),
			];

			expect(ma.assembleFeature(group)).toEqual('min-width: 20em');
		});
	});
});
