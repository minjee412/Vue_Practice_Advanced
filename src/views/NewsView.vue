<template>
  <div>
    <div v-for="user in this.$store.state.news" v-bind:key="user.id">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // store의 FETCH_NEWS를 호출하기 위해서는
    // Dispatch라는 API가 필요하다.
    this.$store.dispatch('FETCH_NEWS');

    // 🍚 화살표 함수 적용 후 🍚
    // // 1
    // fetchNewsList()
    //   .then((response) => {
    //     console.log('호출 후: ', this);
    //     // 2.
    //     this.news = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>

<style scope>
div {
  font-size: 1rem;
}
</style>
