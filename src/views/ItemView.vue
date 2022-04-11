<template>
  <div>
    <p>{{ this.$store.state.item.title }}</p>
    <p>{{ this.$store.state.item.user }}</p>
    <p>
      {{ this.$store.state.item.content }}
    </p>
  </div>
</template>

<script>
export default {
  created() {
    // 👩‍💻(ASK 상세페이지 구현)내가 한 방법 👩‍💻
    // console.log(this.$route.query.id);
    // const itemName = this.$route.query.id;
    // this.$store.dispatch('FETCH_ITEM', itemName);

    // 🧑‍🏫(ASK 상세페이지 구현)강사님 방법 🧑‍🏫
    console.log(this.$route.query.id);
    const itemName = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemName);
  },
};
</script>

<style></style>
