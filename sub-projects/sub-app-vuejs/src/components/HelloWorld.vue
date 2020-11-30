<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>当前应用的数据：{{curDatas}}</h3>
    <h3>来自GlobalModule的数据：{{globalStoreDatas}}</h3>
    <div>
      <button type="primary" @click="changeParentData">反抗爸爸思想</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      time: 0,
      // curDatas: ''
      curDatas: JSON.stringify(this.$store.state.user)
    }
  },
  computed: {
    globalStoreDatas () {
      return JSON.stringify(this.$store.state.global)
    }
  },
  methods: {
    changeParentData () {
      console.log('修改前：', this.$store);
      ++this.time
      this.$store.commit('global/setGlobalState', {
        user: {
          name: '对父信息置换',
          time: `次数${this.time}`
        }
      })
      console.log('修改后:', this.$store.state.global)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
