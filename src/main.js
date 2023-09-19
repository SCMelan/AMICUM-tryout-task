import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import components from '@/components/'

const app = createApp(App)

components.forEach(component=>{
    app.use(store).component(component.name, component)
})

app.mount('#app')
