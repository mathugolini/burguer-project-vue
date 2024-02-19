import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

createApp(App).use(router).mount('#app')
