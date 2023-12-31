import 'virtual:uno.css'
import { createApp } from 'vue'
import { defineAsyncComponent } from 'vue'
const App = defineAsyncComponent(() =>
  import(location.pathname + 'App.vue')
)

createApp(App).mount('#app')
