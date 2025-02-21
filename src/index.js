import { createApp } from 'vue'

import App from './App.vue'
import Storage from './Storage.js'
import createVueRouter from './Router.js'

import '../styles/fontsLoader.styl';
import '../styles/global.styl';

const Router = createVueRouter(Storage);
const app = createApp(App)
  .use(Router)
  .use(Storage)
  .mount('#app');
Storage.$app = app;
