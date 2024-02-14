<template>
    <div>
    <div id="nav">
      <router-link id="logo-url" to="/">
        <img id="logo" :src="logo" :alt="alt">
      </router-link>
      <router-link to="/">Fazer Pedido</router-link>
      <router-link to="/pedidos">Pedidos</router-link>
    </div>
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
    border-bottom: 10px solid #111;
    padding: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 10px;
    margin-left: 10px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  #nav #logo-url {
    margin: auto;
    margin-left: 40px;
  }

  #logo {    
    width: 40px;
    height: 40px;
    margin-right: -20px;
  }

  #nav a {
    color: #FCBA03;
    text-decoration: none;
    margin-right: 20px;
    font-size: 20px;
  }

  #nav a:hover {
    color: #fff;
  }



</style>