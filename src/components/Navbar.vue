<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
      <router-link to="/pedidos">Pedidos</router-link>
    <router-link to="/" id="logo-url">
      <img :src="logo" :alt="alt" id="logo">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  props: ["logo", "alt"]
}
</script>

<style scoped>
  #nav {
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 1%;
  }

   #logo-url {
    margin-left: auto;
  }

  #logo {    
    width: 40px;
    height: 40px;
  }

  #nav a {
    color: #FCBA03;
    text-decoration: none;
    margin-right: 10px;
  }

  #nav a:hover {
    color: #fff;
  }



</style>