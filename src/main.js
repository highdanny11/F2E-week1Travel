import { createApp } from 'vue';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.component('Loading', Loading);
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
