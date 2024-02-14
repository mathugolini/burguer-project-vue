<template>
<BannerVue />
<div class="main-container">
  <h1>Monte o seu burger:</h1>
  <p>formulário</p>
</div>
</template>

<script>
import BannerVue from '../components/Banner.vue'

export default {
  name: 'HomeComponent',
  components: {
    BannerVue
  }
}
</script>