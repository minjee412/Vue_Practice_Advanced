<template>
  <div>
    <!-- #1 -->
    <!-- <div v-for="item in ask.ask" v-bind:key="item.id"> -->
    <!-- #2 & #3 -->
    <div v-for="item in fetchedAsk /*askItems*/" v-bind:key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
// #2
// import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  computed: {
    // 🔶🔶🔶🔶 map 헬퍼 함수 사용하기 🔶🔶🔶🔶
    // #3
    ...mapGetters(['fetchedAsk']),
    // ...mapGetters({
    //  askItems = 'fetchedAsk'
    // }),

    // #2
    // ...mapState({
    //   fetchedAsk: (state) => state.ask,
    // }),
    // #1
    // ask() {
    //   return this.$store.state;
    // },
    // 🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶
  },

  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style scope>
div {
  font-size: 1rem;
}
</style>
