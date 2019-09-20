<template>
  <div class="scroll_wrap">
    <cube-scroll
      ref="scroll"
      :data="menusData"
      direction="horizontal"
    >
      <ul class="menu_list" ref="menu_list" :style="ulWidth?`width:${ulWidth}px`:''">
        <li v-for="(item,i) in menusData" :key="i">
          <div class="img_box">
            <img :src="item.imgUrl" alt />
          </div>
          <p>{{item.name}}</p>
        </li>
      </ul>
    </cube-scroll>
    <!-- <div class="dot_wrap">
      <div class="dot" :style="`transform:translateX(${dotPosition}rem)`"></div>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      ulWidth: '',
      scrollX: 0,
      dotPosition: 0
    }
  },
  props: {
    menusData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    scrollEvent(obj) {
      this.scrollX = obj.x
      this.dotPosition = Math.abs(this.scrollX / (this.ulWidth - 375))
      console.log(this.dotPosition)
    },
    scrollEnd(obj) {
      // this.scrollX = obj.x
      // this.dotPosition = Math.abs(this.scrollX / (this.ulWidth - 375))
    },
    scrollStart(obj) {
      console.log(obj)
    },
    initUlWidth() {
      this.ulWidth =
        this.$refs.menu_list.clientWidth *
        (parseInt(this.$refs.menu_list.children.length / 2) + 1)
      this.$nextTick(() => {
        this.$refs.scroll.scrollTo(0, 0)
        this.$refs.scroll.refresh()
      })
    }
  },
  mounted() {
    this.initUlWidth()
  },
  watch: {
    menusData: function(newVal, oldVal) {
      this.initUlWidth()
    }
  }
}
</script>
<style lang="less" scoped>
/deep/.cube-scroll-content {
  display: inline-block;
}
.menu_list {
  height: 4rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: auto;
  li {
    width: 2.5rem;
    height: 2rem;
    .img_box {
      width: 1.2rem;
      height: 1rem;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    p {
      width: 100%;
      text-align: center;
      margin-top: 0.24rem;
    }
  }
}
.dot_wrap {
  width: 2rem;
  height: 0.15rem;
  background-color: #eee;
  border-radius: 0.08rem;
  margin: 0 auto;
  overflow: hidden;
  .dot {
    width: 1rem;
    height: 100%;
    border-radius: 0.08rem;
    background-color: #fc9153;
    transition: 0.5s all ease;
    transform: translateX(0);
  }
}
</style>
