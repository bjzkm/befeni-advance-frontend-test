import { createApp } from "vue";
import { createPinia } from "pinia";
import VueSmoothScroll from 'vue3-smooth-scroll'
import App from "./App.vue";
import router from "./router";

import './assets/base.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueSmoothScroll);
app.mount("#app");
