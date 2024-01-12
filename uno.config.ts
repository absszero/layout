import { defineConfig } from 'unocss'
import { presetWind } from 'unocss'
import { presetAttributify } from 'unocss'
import { presetIcons } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
})