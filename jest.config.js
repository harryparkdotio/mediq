module.exports = {
	transform: {
		'^.+\\.ts$': 'ts-jest'
	},
	testRegex: '(/test/specs/.*|(\\.|/)(spec))\\.ts$',
	moduleFileExtensions: [
		'ts', 'js', 'json', 'node'
	],
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.ts',
	],
}
