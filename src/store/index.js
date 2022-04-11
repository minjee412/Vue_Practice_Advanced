import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAskList } from '../api';

Vue.use(Vuex);

// 🍖 new Vuex.Store가 인스턴스이기 때문에,
// 다른곳에서 사용할 수 있게 export 해줘야 한다. 🍖
export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  // 👩‍💻 getters : computed와 동일한 기능인데(다만,store에 있을 뿐이다.)
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
  },
  mutations: {
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
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((response) => {
          console.log(response);

          // 🧚state 접근 주의 사항🧚
          // state.news = response.data;
          // 라고 쓰면 너무 편하겠지만, state에 접근 하려면
          // 반드시 mutations에 값을 저장한 후 접근해야 한다 !!!
          // FETCH_NEWS가 mutations에 접근하기 위해서는
          // 기본적으로 제공되는 context라는 인자를 사용해야 한다.

          // ========👩‍💻context 적용 후👩‍💻========
          context.commit('SET_NEWS', response.data);
        })
        .catch((error) => console.log(error));
    },

    // 🔶🔶🔶🔶 FETCH_JOBS 기본 및 Destructuring 🔶🔶🔶🔶
    // ================== 기본 형태 ==================
    // FETCH_JOBS(context) {
    //   fetchJobsList()
    //     .then((response) => {
    //       context.commit('SET_JOBS', response.data);
    //     })
    //     .catch((error) => console.log(error));
    // },

    // ====== 변형 형태(Destructuring : 구조분해할당) ======
    FETCH_JOBS({ commit }) {
      // 👩‍💻 cotext 안에 commit이 이미 들어가 있기 때문에
      // {commit}으로도 표현이 가능 하다. 👩‍💻
      fetchJobsList()
        .then(({ data }) => {
          commit('SET_JOBS', data);
        })
        .catch((error) => console.log(error));
    },
    // 🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶

    FETCH_ASK({ commit }) {
      fetchAskList()
        .then(({ data }) => {
          commit('SET_ASK', data);
        })
        .catch((error) => console.log(error));
    },
  },
});
