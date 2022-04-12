export default {
  SET_NEWS(state, news) {
    // 👩‍💻 여기서 state 뒤에 news는 아래 context에서 넘겨준 response.data를 의미 한다.
    state.news = news;
  },

  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },

  SET_ASK(state, ask) {
    state.ask = ask;
  },

  SET_USER(state, user) {
    state.user = user;
  },

  SET_ITEM(state, item) {
    state.item = item;
  },
};
