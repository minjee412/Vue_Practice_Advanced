<template>
  <div class="header">
    <router-link to='/news'>News</router-link> |
    <router-link to='/ask'>Ask</router-link> |
    <router-link to='/jobs'>Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  font-size: 3rem;
  background-color: beige;
  padding: 8px;
}

.header a{
  text-decoration: none;
  color: burlywood;
}

.header .router-link-exact-active{
  color: #35495e;
}
</style>