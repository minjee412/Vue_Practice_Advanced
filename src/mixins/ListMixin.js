import bus from '../utils/bus';

export default {
  // 재사용할 컴포넌트 옵션
  // created() {
  //   bus.$emit('start:spinner');
  //   // #1 데이터 호출
  //   this.$store
  //     .dispatch('FETCH_LIST', this.$route.name)
  //     .then(() => {
  //       // #5
  //       console.log(5);
  //       console.log('fetched');
  //       bus.$emit('end:spinner');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   bus.$emit('end:spinner');
  // },

  mounted() {
    bus.$emit('end:spinner');
  },
};
