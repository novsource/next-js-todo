import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
  },

  // Parse the `.gitignore` file to get the ignores, on by default
  gitignore: true,

  typescript: true,
  nextjs: true,
})
