<template>
  <div class="program2">
    <h3>如何在子应用vue中使用项目Program2的静态资源</h3>
    <iframe
      id="sub-program2"
      :key="renderTime"
      :src="iframeUrl"
      :width="width"
      :height="height"></iframe>
  </div>
</template>

<script>
/** */
export default {
  name: '',
  data () {
    return {
      // iframeUrl: 'http://localhost:3040/static#/program2/HelloWorld',
      iframeUrl: 'http://localhost:3040/static#/program1',
      width: '50%',
      height: '500px',
      renderTime: null
    }
  },
  mounted () {
    this.renderTime = new Date().getTime()
  }
}
</script>

<style lang='sass' scoped>

</style>
