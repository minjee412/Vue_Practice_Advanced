import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  // 🍥 mode: 'history' : 주소창에 # 빼주는 기능
  mode: 'history',

  routes: [
    {
      path: '/',
      // 🍥 redirect : 페이지 열자 마자 연결 될 주소
      redirect: '/news',
    },
    {
      // 🍥 paht: url 주소
      path: '/news',
      // 🍥 component : url 주소가 갔을 때 표시될 컴포넌트
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      // 👩‍💻 (ASK 상세페이지 구현)내가 한 방법 👩‍💻
      // path: '/item',
      // 🧑‍🏫 (ASK 상세페이지 구현)강사님 방법 🧑‍🏫
      path: '/item/:id',
      component: ItemView,
    },
  ],
});
