<template>
  <div>
    <!-- <div v-for="user in this.$store.state.news" v-bind:key="user.id">
      {{ user.title }}
    </div> -->
    <!-- ============== 디자인 정리 ============== -->
    <p v-for="item in this.$store.state.news" v-bind:key="item.id">
      <a v-bind:href="item.url">
        <!-- item 안에 있는 데이터를 href에 연결해야 되기 때문에 v-bind를 사용한다. -->
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
    <!-- ========================================= -->
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style scope>
div {
  font-size: 1rem;
}
</style>
