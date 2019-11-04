export default {
  esm: {
    type: 'rollup'
  },
  cjs: 'rollup',
  umd: {
    name: 'FatherReactUi',
    globals: {
      react: 'React'
    }
  },
  cssModules: {
    generateScopedName: '[name]__[local]___[hash:base64:5]'
  }
}
