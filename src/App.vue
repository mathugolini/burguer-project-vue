<template>
  <NavbarComponent />
  <FooterComponent />
 <router-view />
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


<style>

</style>
