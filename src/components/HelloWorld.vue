<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
    </ul>
    <cube-select v-model="value" :options="options"></cube-select>
    <cube-button primary @click="toTest">Button</cube-button>
    <cube-button primary @click="toast">toast</cube-button>
    <test>
      <template v-slot:default="slotProps">{{ slotProps.user.firstName }}</template>
    </test>
  </div>
</template>

<script>
import Test from './test'
import { Toast } from 'cube-ui'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: '',
      options: [2013, 2014, 2015, 2016, 2017, 2018]
    }
  },
  components: { Test },
  methods: {
    toTest() {
      this.$router.push({
        path: '/testPage'
      })
    },
    toast() {
      // const toast = this.$createToast({
      //   txt: 'Plain txt',
      //   type: 'txt'
      // })

      const toast = Toast.$create({
        txt: '啦啦啦啦',
        type: 'txt'
      })
      toast.show()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
