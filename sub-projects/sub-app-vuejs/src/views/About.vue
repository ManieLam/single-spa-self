<template>
  <div class="about">
    <h1>This is an about page of subApp [/vue]</h1>
    <UseProgram2></UseProgram2>
  </div>
</template>
<script>
import UseProgram2 from './UseProgram2'
export default {
  name: 'subapp-vue-about',
  components: {
    UseProgram2
  },
  data () {
    return {
      
    }
  }
}
</script>
