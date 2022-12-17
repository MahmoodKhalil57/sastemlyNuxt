import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetDaisy from 'unocss-preset-daisy'

export default defineConfig({
  shortcuts: [
    ['mirror', 'scale-x--100'],
    ['test', 'text-red-500 text-20'],
  ],
  rules: [
    ['btn', {
      'align-items': 'center',
      'justify-content': 'center',
      'display': 'inline-flex',
      'border-radius': 'var(--rounded-btn)',
      'cursor': 'pointer',
    }],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetDaisy(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
