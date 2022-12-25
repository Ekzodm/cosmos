export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1', 
      title: 'Cosmos',
      meta: [
        { name: 'description', content: 'Cosmos' }
      ],
    }
  },
  css: ["@/assets/sass/main.sass"],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
            additionalData: '@import "@/assets/sass/helpers.sass"',
        }
      }
    }
  },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt']
})