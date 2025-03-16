import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src',
      /** ref: https://github.com/unjs/mkdist/pull/21/files */
      pattern: ['**/*', '!**/*.test.ts'],
    },
  ],
  declaration: true,
})
