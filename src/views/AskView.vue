<template>
  <div>
      <div v-for='item in ask' v-bind:key="item.id">
        {{item.title}}
      </div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index";

export default {
  data(){
    return {
      ask: []
    }
  },

  created(){
    // ========== 😮 this의 차이 😮 ==========
    // function()의 this :  선언된 함수 내부를 가리키게 됩니다. 
    // arrow function의 this : 함수가 선언되든 말든 원래의 위치인 Vue Instance를 가리킵니다.
    fetchAskList()
    .then(response => this.ask = response.data)
    .catch(error => console.log(error))
  }

}
</script>

<style scope>
  div {
    font-size: 3rem;
  }
</style>