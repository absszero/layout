import { defineConfig } from 'unocss'
import { presetWind } from 'unocss'
import { presetAttributify } from 'unocss'
import { presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons(),
  ],
})