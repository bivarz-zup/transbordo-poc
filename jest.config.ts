import type { Config } from 'jest';

const config: Config = {
	clearMocks: true,
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(t|j)sx?$': [
			'@swc/jest',
			{
				jsc: {
					parser: {
						syntax: 'typescript',
						tsx: true,
						decorators: true,
					},
					keepClassNames: true,
					transform: {
						legacyDecorator: true,
						decoratorMetadata: true,
						react: {
							runtime: 'automatic',
						},
					},
				},
				module: {
					type: 'es6',
					noInterop: false,
				},
			},
		],
	},
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	modulePaths: ['<rootDir>/src'],
	transformIgnorePatterns: ['<rootDir>/node_modules/(?!(@vivo-easy))'],
	moduleNameMapper: {
		'\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
		'css/(.*)': 'identity-obj-proxy',
	},
};

export default config;
