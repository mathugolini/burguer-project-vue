<template>
  <NavbarComponent />
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
  }
}
</script>


<style></style>
