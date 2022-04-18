<template>
  <div>
    <list-item></list-item>
    <!-- <p v-for="item in fetchedAsk" v-bind:key="item.id"> -->
    <!-- 👩‍💻 (ASK 상세페이지 구현)내가 한 방법 👩‍💻 -->
    <!-- <router-link v-bind:to="item.url"> -->
    <!-- 🧑‍🏫 (ASK 상세페이지 구현)강사님이 한 방법 🧑‍🏫 -->
    <!-- <router-link v-bind:to="`item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p> -->
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem,
  },
};
</script>

<style scope></style>
