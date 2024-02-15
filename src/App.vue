<template>
  <NavbarComponent :logo="logo_src" :alt="app_name"/>
  <router-view />
  <FooterComponent />
</template>

<script>
import NavbarComponent from './components/Navbar.vue'
import FooterComponent from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent
  },
  data() {
    return {
      logo_src: "/img/logo.png",
      app_name: "Make Your Burguer"
    }
  }
}
</script>

<style>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px;
    min-height: 250px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    font-weight: 900;
    margin-bottom: 50px;
    color: #222;

  }
</style>
