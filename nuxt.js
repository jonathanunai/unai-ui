import { defineNuxtModule } from '@nuxt/kit'
import { fileURLToPath } from 'node:url'

export default defineNuxtModule({
  hooks: {
    'components:dirs'(dirs) {
      // Add ./components dir to the list
      dirs.push({
        path: fileURLToPath(new URL('./components', import.meta.url)),
        prefix: 'unai'
      })
    }
  }
})

