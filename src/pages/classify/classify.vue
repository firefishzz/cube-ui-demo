<template>
  <div class="container">
    <div class="left-panel">
      <cube-scroll>
        <cube-tab-bar v-model="selectedLabel" :data="tabs" @change="changeHandler"></cube-tab-bar>
      </cube-scroll>
    </div>
    <div class="right-panel">
      <cube-scroll ref="scroll">
        <cube-button primary @click="toTest(contentData)">{{contentData}}</cube-button>
      </cube-scroll>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        { label: '全部' },
        { label: '近战' },
        { label: '近战2' },
        { label: '近战3' },
        { label: '近战4' },
        { label: '近战5' },
        { label: '近战6' },
        { label: '近战7' },
        { label: '近战8' },
        { label: '近战9' },
        { label: '近战10' },
        { label: '近战11' },
        { label: '近战12' },
        { label: '近战13' },
        { label: '近战14' },
        { label: '近战15' }
      ],
      selectedLabel: '全部',
      contentData: '全部'
    }
  },
  methods: {
    toTest(contentData) {
      this.$router.push({
        path: '/shop',
        query: {
          type: contentData
        }
      })
    },
    changeHandler(label) {
      this.contentData = label
      this.$nextTick(() => {
        this.$refs.scroll.scrollTo(0, 0)
        this.$refs.scroll.refresh()
      })
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  .left-panel {
    position: absolute;
    left: 0;
    top: 0;
    width: 3rem;
    background-color: #f1f1f1;
    height: 100%;
    padding-bottom: 1.28rem;
    /deep/.cube-scroll-list-wrapper {
      .cube-tab-bar {
        flex-wrap: wrap;
        .cube-tab {
          padding: 0;
          width: 100%;
          height: 1.5rem;
          line-height: 1.5rem;
          transition: all 0.3s ease-in;
          flex-basis: unset;
          &.cube-tab_active {
            background-color: #fafafa;
          }
        }
      }
    }
  }
  .right-panel {
    position: absolute;
    left: 3rem;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #fafafa;
    padding: 0.24rem;
  }
}
</style>
