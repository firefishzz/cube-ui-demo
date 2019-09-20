<template>
  <cube-tab-bar
    v-model="selectedLabelDefault"
    :data="tabbarRouter"
    @change="changeHandler"
    class="tab_wrap"
  ></cube-tab-bar>
</template>
<script>
export default {
  name: 'tabNav',
  data() {
    const { tabbarRouter } = this.$store.state.setter
    const { label } = tabbarRouter.filter(
      item => item.path === this.$route.path
    )[0]

    return {
      selectedLabelDefault: label,
      tabbarRouter
    }
  },
  methods: {
    changeHandler(label) {
      const { path } = this.tabbarRouter.filter(item => item.label === label)[0]
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="less" scoped>
.tab_wrap {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 1.28rem;
  background-color: #fff;
  /deep/.cube-tab {
    i {
      font-size: 0.5rem;
      margin-bottom: 0.08rem;
    }
    div{
      margin-top: .08rem;
    }
  }
}
</style>
