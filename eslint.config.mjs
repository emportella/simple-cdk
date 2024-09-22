import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import jest from 'eslint-plugin-jest';

export default [
  // TypeScript and Prettier Integration
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parser: tsParser, // Ensure this is the parser instance
      parserOptions: {
        ecmaVersion: 'latest', // Use latest ECMAScript features
        sourceType: 'module',
        project: './tsconfig.json', // Include your TypeScript project
      },
      globals: {
        // Define globals here instead of using env
        __dirname: 'readonly',
        module: 'readonly',
        process: 'readonly',
        // Add any other globals you need
      },
    },
    plugins: {
      typescript,
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'typescript/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: 'variableLike',
          format: ['camelCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'enumMember',
          format: ['UPPER_CASE'],
        },
      ],
      'typescript/explicit-function-return-type': 'error',
      'typescript/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },

  // Jest testing configuration
  {
    files: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
    languageOptions: {
      globals: {
        jest: 'readonly', // Define Jest globals
      },
    },
    plugins: {
      jest,
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/valid-expect': 'error',
    },
  },

  // Base JavaScript configuration (if any)
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Define any global variables needed for JavaScript files
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // Ignore certain directories
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
];