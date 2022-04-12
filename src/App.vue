<template>
  <div id="app">
    <!-- 1 - Strongly Recommended -->
    <!-- <ToolBar></ToolBar> -->
    <!--- 🙅‍♀️해당 태크 폴더로 이동하지 않는다. --->

    <!-- 2 - Essential -->
    <tool-bar></tool-bar>
    <!--- 🥞 해당 태그로 이동 한다. --->

    <router-view></router-view>
  </div>
</template>

<script>

import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar,

  }
}
</script>

<style>
</style>
