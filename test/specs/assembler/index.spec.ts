import { ChainType, MediqAssembler } from '../../../src/assembler';
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
      { type: ChainType.type, value: 'screen' },
      { type: ChainType.operator, value: 'and' },
      { type: ChainType.prefix, value: 'min' },
      { type: ChainType.feature, value: 'width' },
      { type: ChainType.value, value: 200 },
      { type: ChainType.unit, value: 'px' },
    ],
  ],
  [
    'print and (orientation: landscape)',
    [
      { type: ChainType.type, value: 'print' },
      { type: ChainType.operator, value: 'and' },
      { type: ChainType.feature, value: 'orientation' },
      { type: ChainType.keyword, value: 'landscape' },
    ],
  ],
  [
    'print, (orientation: landscape)',
    [
      { type: ChainType.type, value: 'print' },
      { type: ChainType.operator, value: ',' },
      { type: ChainType.feature, value: 'orientation' },
      { type: ChainType.keyword, value: 'landscape' },
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
    [[prefixes[0], features[0], values[0], units[0]], [features[0], values[0], units[0]], [features[0], keywords[0]]],
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
      const ma = new MediqAssembler();

      const spyGroup = jest.spyOn(ma, 'group');
      const spyAssemProps = jest.spyOn(ma, 'assembleProps');

      ma.assemble(m.chain);

      expect(ma.group).toHaveBeenCalled();
      expect(ma.assembleProps).toHaveBeenCalled();

      spyGroup.mockRestore();
      spyAssemProps.mockRestore();
    });

    it.each(assembleCases)('should output correctly media query: `%s`', (expected, chain) => {
      const m = new Mediq();
      const ma = new MediqAssembler();

      m.chain.push(...chain);

      expect(ma.assemble(m.chain)).toEqual(expected);
    });
  });

  describe('group', () => {
    it.each(groupCases)('should return grouped array (%s)', (name, flat, grouped) => {
      const ma = new MediqAssembler();

      expect(ma.group(flat)).toEqual(grouped);
    });
  });

  describe('assembleProps', () => {
    it('should call assembleProp and assembleFeature', () => {
      const ma = new MediqAssembler();

      const propGroups = [
        [{ type: ChainType.feature, value: 'orientation' }, { type: ChainType.keyword, value: 'landscape' }],
        [{ type: ChainType.type, value: 'all' }],
        [{ type: ChainType.operator, value: 'and' }],
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
      const ma = new MediqAssembler();

      const propGroup = [{ type: ChainType.type, value: 'all' }];

      expect(ma.assembleProp(propGroup)).toEqual('all');
    });

    it('should call assembleFeature (feature + keyword)', () => {
      const ma = new MediqAssembler();

      const featureGroup = [
        { type: ChainType.feature, value: 'height' },
        { type: ChainType.keyword, value: 'browser' },
      ];

      const spy = jest.spyOn(ma, 'assembleFeature');

      ma.assembleProp(featureGroup);

      expect(ma.assembleFeature).toHaveBeenCalledTimes(1);

      spy.mockRestore();
    });

    it('should call assembleFeature (feature + value + unit)', () => {
      const ma = new MediqAssembler();

      const featureGroup = [
        { type: ChainType.feature, value: 'height' },
        { type: ChainType.value, value: 200 },
        { type: ChainType.unit, value: 'px' },
      ];

      const spy = jest.spyOn(ma, 'assembleFeature');

      ma.assembleProp(featureGroup);

      expect(ma.assembleFeature).toHaveBeenCalledTimes(1);

      spy.mockRestore();
    });

    it('should call assembleFeature (prefix + feature + value + unit)', () => {
      const ma = new MediqAssembler();

      const featureGroup = [
        { type: ChainType.prefix, value: 'min' },
        { type: ChainType.feature, value: 'height' },
        { type: ChainType.value, value: 200 },
        { type: ChainType.unit, value: 'px' },
      ];

      const spy = jest.spyOn(ma, 'assembleFeature');

      ma.assembleProp(featureGroup);

      expect(ma.assembleFeature).toHaveBeenCalledTimes(1);

      spy.mockRestore();
    });

    it('should group feature in brackets', () => {
      const ma = new MediqAssembler();

      const featureGroup = [
        { type: ChainType.prefix, value: 'min' },
        { type: ChainType.feature, value: 'height' },
        { type: ChainType.value, value: 200 },
        { type: ChainType.unit, value: 'px' },
      ];

      expect(ma.assembleProp(featureGroup)).toEqual('(min-height: 200px)');
    });

    it('should not group non-feature in brackets', () => {
      const ma = new MediqAssembler();

      const featureGroup = [{ type: ChainType.type, value: 'print' }];

      expect(ma.assembleProp(featureGroup)).toEqual('print');
    });
  });

  describe('assembleFeature', () => {
    it('should assemble feature group (feature + keyword)', () => {
      const ma = new MediqAssembler();

      const group = [
        { type: ChainType.feature, value: 'orientation' },
        { type: ChainType.keyword, value: 'landscape' },
      ];

      expect(ma.assembleFeature(group)).toEqual('orientation: landscape');
    });

    it('should assemble feature group (feature + value + unit)', () => {
      const ma = new MediqAssembler();

      const group = [
        { type: ChainType.feature, value: 'height' },
        { type: ChainType.value, value: 200 },
        { type: ChainType.unit, value: 'px' },
      ];

      expect(ma.assembleFeature(group)).toEqual('height: 200px');
    });

    it('should assemble feature group (prefix + feature + value + unit)', () => {
      const ma = new MediqAssembler();

      const group = [
        { type: ChainType.prefix, value: 'min' },
        { type: ChainType.feature, value: 'width' },
        { type: ChainType.value, value: 20 },
        { type: ChainType.unit, value: 'em' },
      ];

      expect(ma.assembleFeature(group)).toEqual('min-width: 20em');
    });
  });
});
