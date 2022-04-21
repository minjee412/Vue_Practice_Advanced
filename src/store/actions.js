import { fetchUserInfo, fetchItemInfo, fetchList } from '../api';

export default {
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  FETCH_ITEM({ commit }, item) {
    return fetchItemInfo(item)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  // #2
  FETCH_LIST({ commit }, pageName) {
    // #3
    return fetchList(pageName)
      .then((response) => {
        // #4
        console.log(4);
        commit('SET_LIST', response.data);
        return response;
      })
      .catch((error) => console.log(error));
  },
};
