// 원래는 해당 직접적인 페이지에는 유연한 유지보수를 위해서 
// 라우터에 관련된 내용만 들어가는게 좋다.
// 🍖 SO, 데이터와 관련된 부분은 별도의 컴포넌트로 따로 빼두는것이 좋다. 🍖
// 🍖 현재는 기본적인 내용으로 일단 axios를 해당 파일에 적용 해둠. 🍖
<template>
  <div>
      <div v-for='user in users' v-bind:key="user.id">
        {{user.title}}
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      users:[]
    }
  },
  created(){
    var vm = this;
    axios.get('https://api.hnpwa.com/v0/news/1.json')
    .then(function(response){
      console.log(response);
      vm.users = response.data
    })
    .catch(function(error){
      console.log(error);
    })
  }
}
</script>

<style scope>
  div {
    font-size: 3rem;
  }
</style>