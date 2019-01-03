import { Properties } from '../../src/chain';
import { features, Keywords, operators, prefixes, types, Units } from '../../src/map';

function randomPick<T>(arr: T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}

export function feature(): Properties.MediqChainFeature {
	const f = randomPick(Object.keys(features));
	return new Properties.MediqChainFeature(f);
}

export function keyword(): Properties.MediqChainKeyword {
	const k = randomPick(Object.keys(Keywords.DisplayMode));
	return new Properties.MediqChainKeyword(k);
}

export function operator(): Properties.MediqChainOperator {
	const o = randomPick(operators);
	return new Properties.MediqChainOperator(o);
}

export function prefix(): Properties.MediqChainPrefix {
	const p = randomPick(prefixes);
	return new Properties.MediqChainPrefix(p);
}

export function type(): Properties.MediqChainOperator {
	const t = randomPick(types);
	return new Properties.MediqChainOperator(t);
}

export function unit(): Properties.MediqChainUnit {
	const u = randomPick(Object.keys(Units.Length));
	return new Properties.MediqChainUnit(u);
}

export function value(): Properties.MediqChainValue {
	return new Properties.MediqChainValue(100);
}
