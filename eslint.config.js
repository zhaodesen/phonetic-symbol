import unocss from '@unocss/eslint-config/flat'
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['**/*.config.[ts|js]'],
  },
  unocss,
)
