import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './assets/css/style.css';
import App from './App.vue';

createApp(App)
  .use(createPinia())
  .mount('#app');
