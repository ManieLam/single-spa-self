<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>这是主应用的界面</h1>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import mainprogram1 from '@/coomponents/mainprogram1'
export default {
  name: 'home',
  components: {
    // mainprogram1
  }
}
</script>
