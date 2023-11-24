import antfu from '@antfu/eslint-config'
import pluginUnoCSS from '@unocss/eslint-plugin'

export default antfu(
  {},
  {
    plugins: {
      unocss: pluginUnoCSS,
    },
  },
)
