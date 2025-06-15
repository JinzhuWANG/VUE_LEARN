window.ChildComp = {
    emits: ['response'],
    setup(props, { emit }) {
        // Emit a response event with a message
        emit('response', 'Hello from Child emit!');

        return {};
    },
    props: {
        msg_comp: String
    },
    template: `
    <div>
      <h2>Child Component</h2>
      <p>{{ msg_comp || 'No message available' }}</p>
    </div>
  `
};