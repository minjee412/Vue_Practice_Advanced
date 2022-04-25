<template>
  <div>
    <button @click="loginUser">login</button>
    <h1>List</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { handleException } from './utils/handler';
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    // 👩‍💻 promise를 사용할 때는 then , catch를 사용하고
    // async, await를 쓸때는 try, catch를 사용한다. 👩‍💻

    // ========== then catch 형식 ==========
    // loginUser() {
    //   axios
    //     .get('https://jsonplaceholder.typicode.com/users/1')
    //     .then((response) => console.log(response))
    //     .catch((error) => console.log(error));
    // },
    // =====================================
    // ========== 기본 async await 형식 ==========
    // async loginUser() {
    //   var response = await axios.get(
    //     'https://jsonplaceholder.typicode.com/users/1'
    //   );
    //   if (response.data.id === 1) {
    //     console.log('사용자가 인증되었습니다.');
    //     var list = await axios.get(
    //       'https://jsonplaceholder.typicode.com/todos'
    //     );
    //     this.items = list.data;
    //   }
    // },
    // =====================================
    // ========== try catch 형식 (then catch 보다 포괄적인 예외 처리 가능)==========
    async loginUser() {
      try {
        var response = await axios.get(
          'https://jsonplaceholder.typicode.com/users/1'
        );
        if (response.data.id === 1) {
          console.log('사용자가 인증되었습니다.');
          var list = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
          );
          this.items = list.data;
        }
      } catch (error) {
        handleException(error);
        console.log(error);
      }
    },
    // ===========================================================================
  },
};
</script>
