<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>这是子应用/vue的界面</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
