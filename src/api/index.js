import axios from 'axios';

const config = {
  baseurl: 'https://api.hnpwa.com/v0/',
};

function fetchNewsList() {
  return axios.get(`${config.baseurl}news/1.json`);
}

async function fetchAskList() {
  try {
    const response = await axios.get(`${config.baseurl}ask/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

function fetchJobsList() {
  return axios.get(`${config.baseurl}jobs/1.json`);
}

async function fetchList(pageName) {
  try {
    const response = await axios.get(`${config.baseurl}${pageName}/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
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
