<template>
  <div>
    <div class="user-container">
      <div>
        <i class="fa-solid fa-user-secret"></i>
      </div>
      <div class="user-description">
        <div>
          {{ info.id }}
        </div>
        <!-- <router-link :to="`/user/${userInfo.user}`">
          {{ userInfo.id }}
        </router-link> -->
        <div class="time">
          {{ info.created }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object, //info가 Object 형식이라는 validation 까지 함께 넣었다.
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
