import { ChainType } from '../../src/assembler';
import { features, Keywords, operators, prefixes, types, Units } from '../../src/map';
import { IChain } from '../../src/mediq';

function randomPick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function feature(): IChain {
  const f = randomPick(Object.keys(features));
  return { type: ChainType.feature, value: f };
}

export function keyword(): IChain {
  const k = randomPick(Object.keys(Keywords.DisplayMode));
  return { type: ChainType.keyword, value: k };
}

export function operator(): IChain {
  const o = randomPick(Object.keys(operators));
  return { type: ChainType.operator, value: o };
}

export function prefix(): IChain {
  const p = randomPick(Object.keys(prefixes));
  return { type: ChainType.prefix, value: p };
}

export function type(): IChain {
  const t = randomPick(Object.keys(types));
  return { type: ChainType.type, value: t };
}

export function unit(): IChain {
  const u = randomPick(Object.keys(Units.Length));
  return { type: ChainType.unit, value: u };
}

export function value(): IChain {
  return { type: ChainType.value, value: 100 };
}
