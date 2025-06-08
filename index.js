import { createApp, ref } from 'vue'

createApp({
    setup() {
        let id = 0

        const msg = ref('Hello Vue!')
        const msg_id = ref('msg')
        const count = ref(0)
        const text = ref('')
        const awesome = ref(true)
        const todos = ref([
            { id: id++, text: 'Learn HTML' },
            { id: id++, text: 'Learn JavaScript' },
            { id: id++, text: 'Learn Vue' }
        ])
        const newTodo = ref('')


        function increment() {
            count.value++
        }
        function decrement() {
            count.value--
        }
        function toggleawesome(e) {
            awesome.value = !awesome.value
        }
        function rmTodo(todo) {
            todos.value = todos.value.filter((t) => t !== todo)
        }
        function addTodo() {
            todos.value.push({ id: id++, text: newTodo.value })
            newTodo.value = ''
        }

        return {
            msg,
            msg_id,
            count,
            text,
            awesome,
            todos,
            newTodo,
            increment,
            decrement,
            toggleawesome,
            rmTodo,
            addTodo
        }
    }
}).mount('#app')