import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

// 🍖 new Vuex.Store가 인스턴스이기 때문에,
// 다른곳에서 사용할 수 있게 export 해줘야 한다. 🍖
export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: {},
  },
  getters: {
    // 👩‍💻 getters : computed와 동일한 기능인데(다만,store에 있을 뿐이다.) 👩‍💻
    fetchedAsk(state) {
      return state.ask;
    },

    fetchedItem(state) {
      return state.item;
    },
  },
  mutations,
  actions,
});
