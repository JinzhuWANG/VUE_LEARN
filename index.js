import { createApp, ref } from 'vue'

createApp({
    setup() {
        const msg = ref('Hello Vue!')
        return {
            msg
        }
    }
}).mount('#app')