<template>
  <div>
    <!-- <div v-for="job in this.$store.state.jobs" v-bind:key="job.id">
      {{ job.title }}
    </div> -->
    <!-- ============== 디자인 정리 ============== -->
    <p v-for="job in this.$store.state.jobs" v-bind:key="job.id">
      <a v-bind:href="job.url">
        <!-- item 안에 있는 데이터를 href에 연결해야 되기 때문에 v-bind를 사용한다. -->
        {{ job.title }}
      </a>
      <small>{{ job.time_ago }} by {{ job.domain }}</small>
    </p>
    <!-- ========================================= -->
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style scope>
div {
  font-size: 1rem;
}
</style>
