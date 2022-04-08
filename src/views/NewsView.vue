<template>
  <div>
      <div v-for='user in users' v-bind:key="user.id">
        {{user.title}}
      </div>
  </div>
</template>

<script>
import { fetchNewsList } from "../api/index";

export default {
  data(){
    return{
      users:[]
    }
  },
  created(){
    // 🍚 화살표 함수 적용 후 🍚
    fetchNewsList()
    .then(response => this.users = response.data)
    .catch(function(error){
      console.log(error);
    })

    // ========== 😮 this의 차이 😮 ==========
    // function()의 this :  선언된 함수 내부를 가리키게 됩니다. 
    // arrow function의 this : 함수가 선언되든 말든 원래의 위치인 Vue Instance를 가리킵니다.

    // 🍳 화살표 함수 적용 전 🍳
    // var vm = this;
    // fetchNewsList()
    // .then(function(response){
    //   console.log(response.data);
    //   vm.users = response.data;
    // })
  }
}
</script>

<style scope>
  div {
    font-size: 3rem;
  }
</style>