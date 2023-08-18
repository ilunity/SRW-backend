module.exports = {
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'error',
    'no-alert': 'error',
    curly: 'error',
    'no-eval': 'error',
    '@typescript-eslint/no-magic-numbers': [
      'warn',
      {
        ignore: [-1, 0, 1],
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    'no-trailing-spaces': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    indent: ['error', 2, { SwitchCase: 1, ignoredNodes: ['PropertyDefinition'] }],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'prefer-const': 'error',
    radix: 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
