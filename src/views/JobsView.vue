<template>
  <div>
    <div v-for='job in jobs' v-bind:key="job.id">
      {{job.title}}
    </div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api/index";

export default {
  data(){
    return{
      jobs:[]
    }
  },

  created(){
    fetchJobsList()
    // ========== 😮 this의 차이 😮 ==========
    // function()의 this :  선언된 함수 내부를 가리키게 됩니다. 
    // arrow function의 this : 함수가 선언되든 말든 원래의 위치인 Vue Instance를 가리킵니다.
    .then(response => this.jobs = response.data)
    .catch(error => console.log(error))
  }
}
</script>

<style scope>
  div {
    font-size: 3rem;
  }
</style>