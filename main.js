import 'virtual:uno.css'
import '@unocss/reset/normalize.css'
import { createApp } from 'vue'
import { defineAsyncComponent } from 'vue'
const App = defineAsyncComponent(() =>
  import(/* @vite-ignore */ location.pathname + 'App.vue')
)

createApp(App).mount('#app')
