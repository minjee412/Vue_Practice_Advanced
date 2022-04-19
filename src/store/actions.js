import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
} from '../api';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        context.commit('SET_NEWS', response.data);
      })
      .catch((error) => console.log(error));
  },

  FETCH_JOBS({ commit }) {
    // 👩‍💻 cotext 안에 commit은 이미 들어있는 요소이기 때문에
    // {commit}으로도 표현이 가능 하다. 👩‍💻
    fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data);
      })
      .catch((error) => console.log(error));
  },

  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch((error) => console.log(error));
  },

  FETCH_USER({ commit }, name) {
    // UserView의 userName을 name으로 넘겨 받았다.
    fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  FETCH_ITEM({ commit }, item) {
    fetchItemInfo(item)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
