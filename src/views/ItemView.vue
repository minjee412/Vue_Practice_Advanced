<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile :info="fetchedItem">
        <div slot="username">{{ fetchedItem.user }}</div>
        <template slot="time">{{ fetchedItem.time_ago }}</template>
      </user-profile>
      <!-- <div class="user-container">
        <div>
          <i class="fa-solid fa-user-secret"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div> -->
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile,
  },
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
