/* eslint-disable */

'use strict';

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: [
    '@typescript-eslint',
    'ember'
  ],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  globals: {
    FastBoot: 'readonly',
  },
  rules: {
    'semi': 'off', // enforced by @typescript-eslint/semi
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off'
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js'
      ],
      excludedFiles: [
        'app/**',
        'addon/**',
        'tests/dummy/app/**'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended']
    },
    // test files
    {
      files: [
        '**/*-test.js',
        '**/*-test.ts'
      ],
      rules: {
        'prefer-arrow-callback': 'off',
        'func-names': 'off'
      }
    }
  ]
};
