실습 순서

1. ItemView 생성

2. 라우터에 ItemView로 갈 수 있는 라우터 정보를 등록
   {
   path: '',
   component:
   }

3. 해당 페이지 컴포넌트로 이동했을 때 받아온 params(id)를 이용해서 페이지 데이터를 표시
   created() {
   this.$store.dispatch('');
   }
