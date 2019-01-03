module.exports = {
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	testRegex: '(/test/specs/.*|(\\.|/)(spec))\\.ts$',
	moduleFileExtensions: ['ts', 'js', 'json', 'node'],
	modulePathIgnorePatterns: ['<rootDir>/dist'],
	coverageReporters: ['text-summary', 'lcov'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.ts', '!src/index.ts'],
};
