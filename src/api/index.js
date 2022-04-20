import axios from 'axios';

const config = {
  baseurl: 'https://api.hnpwa.com/v0/',
};

function fetchNewsList() {
  return axios.get(`${config.baseurl}news/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseurl}ask/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseurl}jobs/1.json`);
}

function fetchList(pageName) {
  return axios.get(`${config.baseurl}${pageName}/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseurl}user/${username}.json`);
}

function fetchItemInfo(itemname) {
  return axios.get(`${config.baseurl}item/${itemname}.json`);
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
};
