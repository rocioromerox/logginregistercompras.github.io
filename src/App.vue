<template>
  <div id="app">
    <div>
    <router-link to="/">Home</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/loggin">Loggin</router-link> |
      <router-link to="/miscompras">Mis compras</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>


export default {
 
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>