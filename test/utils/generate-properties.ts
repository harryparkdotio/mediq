import { Properties } from '../../src/chain';
import { Features, Keywords, Operators, Prefixes, Types, Units } from '../../src/constants';

function randomPick<T>(arr: T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}

export function feature(): Properties.MediqChainFeature {
	const f = randomPick(Object.values(Features));
	return new Properties.MediqChainFeature(f);
}

export function keyword(): Properties.MediqChainKeyword {
	const k = randomPick(Object.values(Keywords));
	return new Properties.MediqChainKeyword(k);
}

export function operator(): Properties.MediqChainOperator {
	const o = randomPick(Object.values(Operators));
	return new Properties.MediqChainOperator(o);
}

export function prefix(): Properties.MediqChainPrefix {
	const p = randomPick(Object.values(Prefixes));
	return new Properties.MediqChainPrefix(p);
}

export function type(): Properties.MediqChainOperator {
	const t = randomPick(Object.values(Types));
	return new Properties.MediqChainOperator(t);
}

export function unit(): Properties.MediqChainUnit {
	const u = randomPick(Object.values(Units));
	return new Properties.MediqChainUnit(u);
}

export function value(): Properties.MediqChainValue {
	return new Properties.MediqChainValue(100);
}
