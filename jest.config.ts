/* eslint-disable typescript/naming-convention */
import type { Config } from 'jest';

const config: Config = {
  // Specifies the root folder for the test files
  roots: ['<rootDir>/src'],

  // Setting up the environment (Node.js in case of backend or browser if needed)
  testEnvironment: 'node', // or 'jsdom' for browser-like testing

  // Specifies how to transform TypeScript files using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest' // Transform TypeScript files using ts-jest
  },

  // Automatically reset mocks between every test to ensure no state leakage
  resetMocks: true,

  // Ignore patterns for node_modules and build output directories
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  // Enable code coverage and specify which files to collect coverage from
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}', // Collect coverage from all TypeScript files in src
    '!src/**/*.d.ts', // Ignore type declaration files
    '!src/**/index.ts' // Ignore index files
  ],

  // Output coverage report in different formats for better analysis
  coverageReporters: ['text', 'lcov', 'json-summary'],

  // Where to output coverage reports
  coverageDirectory: 'coverage',

  // Ensures that Jest runs tests in parallel
  maxWorkers: '50%', // Use 50% of available CPU cores

  // Global setup for tests
  //setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Module resolution: Automatically resolves the following extensions
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],

  // Clear mocks after each test to ensure no state carries over between tests
  clearMocks: true,

  // Configuring Jest to work well with TypeScript paths and aliases (if you use them)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1' // Maps the @ alias to the src folder
  },

  // Specifying patterns to run tests (for instance, all files ending with .test.ts)
  testMatch: ['**/?(*.)+(test|spec).[tj]s?(x)']
};

export default config;
