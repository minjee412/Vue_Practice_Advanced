<template>
  <div>
    <ul class="news-list">
      <li
        v-for="item in listItems /*this.$store.state.news // 공통컴포넌트 이기 때문에 이름을 한정하면 안된다.*/"
        v-bind:key="item.id"
        class="post"
      >
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || item.comments_count }}
          <!-- points가 없으면 comments_count으로 표시 -->
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            by
            <router-link
              v-if="item.user"
              v-bind:to="`/user/${item.user}`"
              class="link-text"
            >
              {{ item.user }}
            </router-link>
            <a href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    // this.$store.dispatch('FETCH_NEWS');
    // console.log(this.$route);
    const name = this.$route.name;
    let actionName = ''; // actionName이 문자라는걸 먼저 정의

    if (name === 'news') {
      //   this.$store.dispatch('FETCH_NEWS');
      // ====== 🔽이름에 따른 분기🔽 ======
      actionName = 'FETCH_NEWS';
      // =============================
    } else if (name === 'ask') {
      actionName = 'FETCH_ASK';
    } else if (name === 'jobs') {
      actionName = 'FETCH_JOBS';
    }
    this.$store.dispatch(actionName);
    // 반드시 if, else if 밑에 줄에 있어야 한다.
  },

  computed: {
    listItems() {
      const name = this.$route.name;
      if (name === 'news') {
        return this.$store.state.news;
      } else if (name === 'ask') {
        return this.$store.state.ask;
      } else {
        return this.$store.state.jobs;
      }
    },
  },
};
</script>

<style scope>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}

.comments_count {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
</style>
