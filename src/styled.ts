import { css, InterpolationValue, SimpleInterpolation } from 'styled-components';
import { Mediq } from './mediq';

export class StyledMediq extends Mediq {
	public get css(): (
		strings: TemplateStringsArray,
		...interpolations: SimpleInterpolation[]
	) => InterpolationValue[] {
		return (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
			${this.toString()} {
				${css(strings, ...interpolations)};
			}
		`;
	}
}

export function styledMediq(): StyledMediq {
	return new StyledMediq();
}

export default styledMediq;

export const mediq = styledMediq;
