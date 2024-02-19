<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <PedidosVue />
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>

<script setup>
import PedidosVue from './Pedidos.vue';

import awsconfig from '@/aws-exports'; // Usando o alias '@' para referenciar a raiz do diretório src

import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { Amplify } from 'aws-amplify';


Amplify.configure(awsconfig);
</script>

<script>
export default {
  name: 'AmplifyComponent',
  components: {
    PedidosVue
  }
};
</script>