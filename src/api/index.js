import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseurl: 'https://api.hnpwa.com/v0/',
  /*     Name	    URL
        News	    https://api.hnpwa.com/v0/news/1.json
        Newest  	https://api.hnpwa.com/v0/newest/1.json
        Ask	        https://api.hnpwa.com/v0/ask/1.json
        Show	    https://api.hnpwa.com/v0/show/1.json
        Jobs	    https://api.hnpwa.com/v0/jobs/1.jso  
    👩‍💻 주소의 동일한 부분을 baseurl로 따로 뺀다. 👩‍💻         */
};

// 2. API 함수들을 정리
function fetchNewsList() {
  // 👩‍💻 return을 바로 해주는게 중요 !!! 👩‍💻
  return axios.get(`${config.baseurl}news/1.json`); // 템플릿리터럴 적용
  // return axios.get(config.baseurl + 'news/1.json'); // ✔️템플릿리터럴 적용 전
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
