import {
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
} from '../api';

export default {
  // ✔️ promise
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then((response) => {
  //       context.commit('SET_NEWS', response.data);
  //       return response;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  // 👩‍💻 async
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit('SET_NEWS', response.data);
    return response;
  },

  // ✔️ promise
  // FETCH_JOBS({ commit }) {
  //   return fetchJobsList({ commit })
  //     .then(({ data }) => {
  //       commit('SET_JOBS', data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  // 👩‍💻 async
  async FETCH_JOBS({ commit }) {
    try {
      const response = await fetchJobsList({ commit });
      commit('SET_JOBS', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  // 👩‍💻 async
  async FETCH_ASK({ commit }) {
    // 🍥 fetchAskList쪽에서 try catch 처리 하면 따로
    // 해당 부분에서 try catch 처리 할 필요가 없다. 🍥
    const response = await fetchAskList({ commit });
    commit('SET_ASK', response.data);
    return response;
  },

  // 👩‍💻 async
  async FETCH_USER({ commit }, name) {
    // ✔️ promise
    // return fetchUserInfo(name)
    //   .then(({ data }) => {
    //     commit('SET_USER', data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    const response = await fetchUserInfo(name);
    commit('SET_USER', response.data);
    return response;
  },

  async FETCH_ITEM({ commit }, item) {
    const response = await fetchItemInfo(item);
    commit('SET_ITEM', response.data);
    return response;
  },

  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  },
};
