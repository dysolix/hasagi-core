import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from "eslint/config";
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/*.d.ts',
      '**/tests/**',
    ],
  },
  {
    files: [
      'src/**/*.ts',
    ],
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "@stylistic": stylistic,
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      '@typescript-eslint/no-unsafe-declaration-merging': 'error',
      '@typescript-eslint/no-unsafe-function-type': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-wrapper-object-types': 'error',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/triple-slash-reference': 'error',
      // Core ESLint rules
      'no-array-constructor': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      "object-curly-newline": ["error", {
        "ObjectExpression": { "multiline": true },
        "ObjectPattern": "never",
        "ImportDeclaration": "never",
        "ExportDeclaration": { "multiline": true, "minProperties": 3 },
      }],
      // Stylistic rules
      "@stylistic/array-bracket-newline": ["error", { "multiline": true, "minItems": 4 }],
      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/array-element-newline": ["error", { "multiline": true, "minItems": 4 }],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/comma-spacing": ["error", { "before": false, "after": true }],
      "@stylistic/comma-style": ["error", "last"],
      "@stylistic/curly-newline": ["error", "always"],
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/function-call-argument-newline": ["error", "consistent"],
      "@stylistic/function-paren-newline": ["error", "multiline-arguments"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/keyword-spacing": ["error", { "before": true, "after": true }],
      "@stylistic/linebreak-style": ["error", "unix"],
      "@stylistic/member-delimiter-style": [
        "error",
        {
          "multiline": {
            "delimiter": "semi",
            "requireLast": true,
          },
          "singleline": {
            "delimiter": "semi",
            "requireLast": false,
          },
          "multilineDetection": "brackets",
        },
      ],
      "@stylistic/no-extra-parens": "off",
      "@stylistic/no-extra-semi": "error",
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/no-whitespace-before-property": "error",
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
      "@stylistic/quotes": ["error", "double", { "avoidEscape": true }],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/semi-spacing": ["error", { "before": false, "after": true }],
      "@stylistic/spaced-comment": ["error", "always"],
    },
  },
]);
