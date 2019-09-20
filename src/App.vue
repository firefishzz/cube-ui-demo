<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$store.getters.isTabbarRouter(this.$route.path)" class="tab_page"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$store.getters.isTabbarRouter(this.$route.path)" class="not_tab"></router-view>
    </transition>
    <tab-nav v-if="$store.getters.isTabbarRouter(this.$route.path)"></tab-nav>
  </div>
</template>

<script>
import tabNav from '@/components/footer/tabNav'

export default {
  name: 'App',
  components: { tabNav }
}
</script>

<style lang="less">
@import './assets/css/base.css';
#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}

.tab_page {
  padding-bottom: 1.28rem;
}
.not_tab {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
</style>
