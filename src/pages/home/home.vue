<template>
  <div class="container">
    <div class="swipe_wrap">
      <cube-slide :data="swipeData" :loop="true" :auto-play="true" :interval="4000">
        <cube-slide-item
          v-for="(item, i) in swipeData"
          :key="i"
          @click.native="clickHandler(item, i)"
        >
          <img :src="item.image" />
        </cube-slide-item>
      </cube-slide>
    </div>
    <div class="menu_wrap">
      <scroll-menu :menusData="menusData"></scroll-menu>
    </div>
    <cube-button primary @click="toTest">Button</cube-button>
    <cube-button primary @click="refresh">刷新</cube-button>
    <cube-button primary @click="toAdd">{{num}}</cube-button>
  </div>
</template>
<script>
import scrollMenu from '@/components/nav/scrollMenu'

export default {
  data() {
    return {
      num: 1,
      ulWidth: '',
      swipeData: [
        {
          url: 'http://www.didichuxing.com/',
          image:
            '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
        },
        {
          url: 'http://www.didichuxing.com/',
          image:
            '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
        },
        {
          url: 'http://www.didichuxing.com/',
          image:
            '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
        }
      ],
      menusData: [
        {
          imgUrl:
            'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',
          name: 'test01'
        },
        {
          imgUrl:
            'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',
          name: 'test02'
        },
        {
          imgUrl:
            'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',
          name: 'test03'
        },
        {
          imgUrl:
            'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',
          name: 'test04'
        },
        {
          imgUrl:
            'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',
          name: 'test05'
        },
        {
          imgUrl:
            'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',
          name: 'test06'
        },
        {
          imgUrl:
            'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',
          name: 'test07'
        },
        {
          imgUrl:
            'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',
          name: 'test08'
        },
        {
          imgUrl:
            'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',
          name: 'test09'
        },
        {
          imgUrl:
            'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',
          name: 'test10'
        },
        {
          imgUrl:
            'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',
          name: 'test11'
        }
      ]
    }
  },
  components: { scrollMenu },
  methods: {
    initUlWidth() {
      this.ulWidth =
        this.$refs.menu_list.clientWidth *
        (parseInt(this.$refs.menu_list.children.length / 2) + 1)
      this.$nextTick(() => {
        this.$refs.scroll.scrollTo(0, 0)
        this.$refs.scroll.refresh()
      })
    },
    clickHandler(item, i) {
      console.log(item, i)
    },
    toTest() {
      this.$router.push('/order')
    },
    toAdd() {
      this.num = this.num + 1
    },
    refresh() {
      window.location.reload()
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  background-color: #fff;
  .swipe_wrap {
    width: 100%;
    margin-bottom: 0.4rem;
  }
  .menu_wrap {
    width: 100%;
    // height: 4.8rem;
    margin-bottom: .4rem;
  }
}
</style>
