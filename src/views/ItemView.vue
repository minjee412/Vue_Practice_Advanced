<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-container">
        <div>
          <i class="fa-solid fa-user-secret"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
            <!-- NewsView에서 user정보로 이동하는 코드참고하기 -->
            <!-- user앞에 /는 주소창에 8080/item/user/아이디로 나오는걸 8080/user/아이디로 나오도록 바꿔줌  -->
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div>
      <!-- <p>{{ fetchedItem.title }}</p> -->
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <!-- <p>{{ this.$store.state.item.content }}</p> -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedItem']),
  },
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

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-solid {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>
