import * as sc from 'styled-components';
import { mediq, StyledMediq } from '../../src/styled';

describe('styled', () => {
	it('should return a new instance of StyledMediq', () => {
		expect(mediq()).toBeInstanceOf(StyledMediq);
	});

	it('should return a ttl function', () => {
		expect(typeof mediq().css).toBe('function');
	});

	it('should call StyledComponents.css', () => {
		const spy = jest.spyOn(sc, 'css');

		// tslint:disable-next-line:no-unused-expression
		mediq().css`${1}`;

		expect(spy).toHaveBeenCalledTimes(2);

		spy.mockRestore();
	});

	it('should be correct value', () => {
		const received = mediq().css`${1}`
			.toString()
			.replace(/\n|\t/g, '')
			// removes leading ','
			.slice(1);
		const expected = sc.css`${mediq().toString()} {${sc.css`${1}`};}`.toString().replace(/\n|\t/g, '');
		expect(received).toEqual(expected);
	});
});
