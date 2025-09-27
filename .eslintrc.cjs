/* eslint-env node */
/* eslint-disable @typescript-eslint/no-require-imports */

require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'plugin:@typescript-eslint/strict'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}

