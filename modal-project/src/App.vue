<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <!-- all Modal template will be nested here -->
    <!-- passing props header, text, theme to modal -->
    <!-- receiving event close from modal -->
    <!-- slots used to pass templates (too complicated for props) / you can use named slots, useful when you have a certain structure -->
    <Modal :header="header" :text="text" theme="dark" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">like & subscribe</a>
      </template>
      <h1>Vue ninja</h1>
      <p>Available on youtube</p>
    </Modal>
  </div>
  <button @click.alt="toggleModal">open modal(alt)</button>
  <input type="text" ref="name">
  <button @click="handleclick">click me</button>
</template>

<script>
// import Modal component
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My first Vue App :)',
      header: 'Sign up for the Patreon!',
      text: 'Grab more content',
      showModal: false
    }
  },
  methods: {
    handleclick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
