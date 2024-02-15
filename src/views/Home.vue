<template>
<BannerVue />
<div class="main-container">
  <h1>MONTE SEU BURGER</h1>
  <BurgerForm />
</div>
</template>

<script>
import BurgerForm from '@/components/BurgerForm.vue'
import BannerVue from '../components/Banner.vue'


export default {
  name: 'HomeComponent',
  components: {
    BannerVue,
    BurgerForm
  }
}
</script>