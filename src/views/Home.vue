<template>
<BannerVue />
<div class="main-container">
  <h1>Monte seu Burger</h1>
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