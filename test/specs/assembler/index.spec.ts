import { MediqAssembler } from '../../../src/assembler';
import { Properties } from '../../../src/chain';
import { Mediq } from '../../../src/mediq';

import * as generate from '../../utils/generate-properties';

const features = [generate.feature()];
const keywords = [generate.keyword()];
const operators = [generate.operator()];
const prefixes = [generate.prefix()];
const values = [generate.value()];
const types = [generate.type()];
const units = [generate.unit()];

// #region assemble cases
const assembleCases = [
	[
		'screen and (min-width: 200px)',
		[
			new Properties.MediqChainType('screen'),
			new Properties.MediqChainOperator('and'),
			new Properties.MediqChainPrefix('min'),
			new Properties.MediqChainFeature('width'),
			new Properties.MediqChainValue(200),
			new Properties.MediqChainUnit('px'),
		],
	],
	[
		'print and (orientation: landscape)',
		[
			new Properties.MediqChainType('print'),
			new Properties.MediqChainOperator('and'),
			new Properties.MediqChainFeature('orientation'),
			new Properties.MediqChainKeyword('landscape'),
		],
	],
	[
		'print, (orientation: landscape)',
		[
			new Properties.MediqChainType('print'),
			new Properties.MediqChainOperator(','),
			new Properties.MediqChainFeature('orientation'),
			new Properties.MediqChainKeyword('landscape'),
		],
	],
];
// #endregion

// #region group cases
const groupCases = [
	['single feature + keyword', [features[0], keywords[0]], [[features[0], keywords[0]]]],
	['single feature + value + units', [features[0], values[0], units[0]], [[features[0], values[0], units[0]]]],
	[
		'single prefix + feature + value + units',
		[prefixes[0], features[0], values[0], units[0]],
		[[prefixes[0], features[0], values[0], units[0]]],
	],
	[
		'3x feature + keyword',
		[features[0], keywords[0], features[0], keywords[0], features[0], keywords[0]],
		[[features[0], keywords[0]], [features[0], keywords[0]], [features[0], keywords[0]]],
	],
	[
		'3x feature + value + units',
		[features[0], values[0], units[0], features[0], values[0], units[0], features[0], values[0], units[0]],
		[[features[0], values[0], units[0]], [features[0], values[0], units[0]], [features[0], values[0], units[0]]],
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
			[prefixes[0], features[0], values[0], units[0]],
			[prefixes[0], features[0], values[0], units[0]],
			[prefixes[0], features[0], values[0], units[0]],
		],
	],
	[
		'3x mixed',
		[prefixes[0], features[0], values[0], units[0], features[0], values[0], units[0], features[0], keywords[0]],
		[
			[prefixes[0], features[0], values[0], units[0]],
			[features[0], values[0], units[0]],
			[features[0], keywords[0]],
		],
	],
	[
		'type + feature + value + unit',
		[types[0], features[0], values[0], units[0]],
		[[types[0]], [features[0], values[0], units[0]]],
	],
	[
		'type + feature + value + unit + type',
		[types[0], features[0], values[0], units[0], types[0]],
		[[types[0]], [features[0], values[0], units[0]], [types[0]]],
	],
	[
		'type + operator + feature + value + unit + type',
		[types[0], operators[0], features[0], values[0], units[0], types[0]],
		[[types[0]], [operators[0]], [features[0], values[0], units[0]], [types[0]]],
	],
];
// #endregion

describe('MediqAssembler', () => {
	describe('assemble', () => {
		it('should call group, assembleProps', () => {
			const m = new Mediq();
			const ma = new MediqAssembler(m);

			const spyGroup = jest.spyOn(ma, 'group');
			const spyAssemProps = jest.spyOn(ma, 'assembleProps');

			ma.assemble();

			expect(ma.group).toHaveBeenCalled();
			expect(ma.assembleProps).toHaveBeenCalled();

			spyGroup.mockRestore();
			spyAssemProps.mockRestore();
		});

		it.each(assembleCases)('should output correctly media query: `%s`', (expected, chain) => {
			const m = new Mediq();
			const ma = new MediqAssembler(m);

			m.chain.push(...chain);

			expect(ma.assemble()).toEqual(expected);
		});
	});

	describe('group', () => {
		it.each(groupCases)('should return grouped array (%s)', (name, flat, grouped) => {
			const m = new Mediq();
			const ma = new MediqAssembler(m);

			expect(ma.group(flat)).toEqual(grouped);
		});
	});

	describe('assembleProps', () => {
		it('should call assembleProp and assembleFeature', () => {
			const m = new Mediq();
			const ma = new MediqAssembler(m);

			const propGroups = [
				[new Properties.MediqChainFeature('orientation'), new Properties.MediqChainKeyword('landscape')],
				[new Properties.MediqChainType('all')],
				[new Properties.MediqChainOperator('and')],
			];

			const spyAssemProp = jest.spyOn(ma, 'assembleProp');
			const spyAssemFeature = jest.spyOn(ma, 'assembleFeature');

			ma.assembleProps(propGroups);

			expect(ma.assembleFeature).toHaveBeenCalledTimes(1);
			expect(ma.assembleProp).toHaveBeenCalledTimes(3);

			spyAssemProp.mockRestore();
			spyAssemFeature.mockRestore();
		});
	});

	describe('assembleProp', () => {
		it('should assemble prop group', () => {
			const m = new Mediq();
			const ma = new MediqAssembler(m);

			const propGroup = [new Properties.MediqChainType('all')];

			expect(ma.assembleProp(propGroup)).toEqual('all');
		});

		it('should call assembleFeature (feature + keyword)', () => {
			const m = new Mediq();
			const ma = new MediqAssembler(m);

			const featureGroup = [
				new Properties.MediqChainFeature('height'),
				new Properties.MediqChainKeyword('browser'),
			];

			const spy = jest.spyOn(ma, 'assembleFeature');

			ma.assembleProp(featureGroup);

			expect(ma.assembleFeature).toHaveBeenCalledTimes(1);

			spy.mockRestore();
		});

		it('should call assembleFeature (feature + value + unit)', () => {
			const m = new Mediq();
			const ma = new MediqAssembler(m);

			const featureGroup = [
				new Properties.MediqChainFeature('height'),
				new Properties.MediqChainValue(200),
				new Properties.MediqChainUnit('px'),
			];

			const spy = jest.spyOn(ma, 'assembleFeature');

			ma.assembleProp(featureGroup);

			expect(ma.assembleFeature).toHaveBeenCalledTimes(1);

			spy.mockRestore();
		});

		it('should call assembleFeature (prefix + feature + value + unit)', () => {
			const m = new Mediq();
			const ma = new MediqAssembler(m);

			const featureGroup = [
				new Properties.MediqChainPrefix('min'),
				new Properties.MediqChainFeature('height'),
				new Properties.MediqChainValue(200),
				new Properties.MediqChainUnit('px'),
			];

			const spy = jest.spyOn(ma, 'assembleFeature');

			ma.assembleProp(featureGroup);

			expect(ma.assembleFeature).toHaveBeenCalledTimes(1);

			spy.mockRestore();
		});

		it('should group feature in brackets', () => {
			const m = new Mediq();
			const ma = new MediqAssembler(m);

			const featureGroup = [
				new Properties.MediqChainPrefix('min'),
				new Properties.MediqChainFeature('height'),
				new Properties.MediqChainValue(200),
				new Properties.MediqChainUnit('px'),
			];

			expect(ma.assembleProp(featureGroup)).toEqual('(min-height: 200px)');
		});

		it('should not group non-feature in brackets', () => {
			const m = new Mediq();
			const ma = new MediqAssembler(m);

			const featureGroup = [new Properties.MediqChainType('print')];

			expect(ma.assembleProp(featureGroup)).toEqual('print');
		});
	});

	describe('assembleFeature', () => {
		it('should assemble feature group (feature + keyword)', () => {
			const m = new Mediq();
			const ma = new MediqAssembler(m);

			const group = [
				new Properties.MediqChainFeature('orientation'),
				new Properties.MediqChainKeyword('landscape'),
			];

			expect(ma.assembleFeature(group)).toEqual('orientation: landscape');
		});

		it('should assemble feature group (feature + value + unit)', () => {
			const m = new Mediq();
			const ma = new MediqAssembler(m);

			const group = [
				new Properties.MediqChainFeature('height'),
				new Properties.MediqChainValue(200),
				new Properties.MediqChainUnit('px'),
			];

			expect(ma.assembleFeature(group)).toEqual('height: 200px');
		});

		it('should assemble feature group (prefix + feature + value + unit)', () => {
			const m = new Mediq();
			const ma = new MediqAssembler(m);

			const group = [
				new Properties.MediqChainPrefix('min'),
				new Properties.MediqChainFeature('width'),
				new Properties.MediqChainValue(20),
				new Properties.MediqChainUnit('em'),
			];

			expect(ma.assembleFeature(group)).toEqual('min-width: 20em');
		});
	});
});
