import { fetchNewsList, fetchJobsList, fetchAskList } from '../api';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        context.commit('SET_NEWS', response.data);
      })
      .catch((error) => console.log(error));
  },

  FETCH_JOBS({ commit }) {
    // 👩‍💻 cotext 안에 commit이 이미 들어가 있기 때문에
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
};
