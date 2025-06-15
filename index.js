
const { createApp, ref, computed, onMounted, watch } = Vue


const app = createApp({
    setup() {
        let id = 0

        const msg = ref('Hello Vue!')
        const msg_cls = ref('title')
        const count = ref(0)
        const text = ref('')
        const awesome = ref(true)
        const todos = ref([
            { id: id++, text: 'Learn HTML', done: true },
            { id: id++, text: 'Learn JavaScript', done: false },
            { id: id++, text: 'Learn Vue', done: true }
        ])
        const newTodo = ref('')
        const hideCompleted = ref(false)
        const p_ref = ref(null)
        const todoID = ref(1)
        const todoData = ref(null)
        const child_msg = ref('No child msg yet')


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

        const filteredTodos = computed(() => {
            return hideCompleted.value
                ? todos.value.filter((t) => !t.done)
                : todos.value
        })

        async function fetchData() {
            todoData.value = null
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${todoID.value}`
            )
            todoData.value = await res.json()
        }

        fetchData()
        watch(todoID, fetchData)

        onMounted(() => {
            p_ref.value.textContent = "Hello"
        })

        return {
            msg,
            msg_cls,
            count,
            text,
            awesome,
            todos,
            todos,
            filteredTodos,
            newTodo,
            hideCompleted,
            p_ref,
            todoID,
            todoData,
            child_msg,
            increment,
            decrement,
            toggleawesome,
            rmTodo,
            addTodo
        }
    }
})

// Register the globally loaded ChildComp
app.component('child-comp', window.ChildComp)

app.mount('#app')
