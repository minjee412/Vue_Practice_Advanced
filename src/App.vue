<template>
  <div id="app">
    <!-- 1 - Strongly Recommended -->
    <!-- <ToolBar></ToolBar> -->
    <!--- 🙅‍♀️해당 태크 폴더로 이동하지 않는다. --->

    <!-- 2 - Essential -->
    <tool-bar></tool-bar>
    <!--- 🥞 해당 태그로 이동 한다. --->

    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

/*  Router Transition  */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-endter,
.page-leave-to {
  opacity: 0;
}
</style>
