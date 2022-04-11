<template>
  <div>
    <!-- ============== 해당 페이지 연결 ============== -->
    <p v-for="item in fetchedAsk" v-bind:key="item.id">
      <!-- <a v-bind:href="item.url"> -->
      <!-- item 안에 있는 데이터를 href에 연결해야 되기 때문에 v-bind를 사용한다. -->
      <!-- {{ item.title }} -->
      <!-- </a> -->

      <!-- 👩‍💻 (ASK 상세페이지 구현)내가 한 방법 👩‍💻 -->
      <!-- <router-link v-bind:to="item.url"> -->
      <!-- 🧑‍🏫 (ASK 상세페이지 구현)강사님이 한 방법 🧑‍🏫 -->
      <router-link v-bind:to="`item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
    <!-- ========================================= -->
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
