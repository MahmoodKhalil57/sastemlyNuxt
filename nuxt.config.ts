export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
    '@kidonng/daisyui/index.css',
  ],
  colorMode: {
    classSuffix: '',
  },
})
