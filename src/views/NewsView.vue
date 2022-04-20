<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus';
export default {
  components: {
    ListItem,
  },

  created() {
    bus.$emit('start:spinner');

    // 데이터 불러오는 시간이 너무 빨라서, spinner가 보이지 않기때문에
    // 임의로 setTimeout을 줘서 spinner가 3초 진행 되고 데이터 불러오도록 구현
    setTimeout(() => {
      // FETCH_NEWS를 호출 → actions.js에서 response를 담아온다.
      // 받아온 response를 통해 then() catch() 사용. (promise chaining)
      this.$store
        .dispatch('FETCH_NEWS')
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch((error) => {
          console.log(error);
        });
      bus.$emit('end:spinner');
    }, 3000);
  },
};
</script>

<style scope></style>
