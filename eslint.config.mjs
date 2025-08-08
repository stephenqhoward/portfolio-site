// @ts-check
import path from 'node:path';
import next from 'eslint-config-next';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**'],
  },
  js.configs.recommended,
  ...next,
  ...tseslint.config(
    {
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        parserOptions: {
          project: path.join(process.cwd(), 'tsconfig.json'),
        },
        globals: globals.browser,
      },
      rules: {
        '@typescript-eslint/consistent-type-imports': 'warn',
      },
    }
  ),
];


