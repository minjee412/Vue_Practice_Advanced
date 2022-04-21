import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
// import createListView from '@/views/CreateListView';
import bus from '../utils/bus';
import { store } from '../store/index';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        // #1 데이터 호출
        // $store는 인스턴스 안에서만 사용 가능 하기 때문에,
        // store를 정의한 파일(index)를 import 해서 사용
        // this.$store
        store
          // to의 로그를 찍어보면 name에 가고자 하는 페이지의 이름이 나온다.
          // 그래서, this.$route.name 은 to.name 으로 사용하면 된다.
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            // #5
            console.log(5);
            console.log('fetched');

            next(); // beforeEnter를 사용할때는 반드시 끝에 next를 써줘야 페이지 이동 함.
          })
          .catch((error) => {
            console.log(error);
          });

        // console.log('to', to);
        // console.log('from', from);
        // console.log('next', next);
      },
      // component: createListView('NewsView'),
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched');
            // bus.$emit('end:spinner');// spinner 종료시점 수정
            next(); // beforeEnter를 사용할때는 반드시 끝에 next를 써줘야 페이지 이동 함.
          })
          .catch((error) => {
            console.log(error);
          });
      },
      // component: createListView('AskView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => {
            console.log(error);
          });
      },
      // component: createListView('JobsView'),
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ],
});
