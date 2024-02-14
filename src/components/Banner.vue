<template>
  <div id="main-banner">
    <h1>Make Your Burger</h1>
  </div>
</template>

<script>
  export default {
    name: "BannerComponent"
  }
</script>

<style scoped>

  #main-banner {
    background-image: url('/public/img/burguer.jpg');
    margin-right: 10px;
    margin-left: 10px;
    background-size: cover;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  #main-banner h1 {
    color: #FCBA03;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    text-align: center;
    font-size: 60px;
    background-color: rgba(120 26 17);
    padding: 20px 40px;
  }

</style>