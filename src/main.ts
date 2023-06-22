import "./assets/styles/global.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

let vh = window.innerHeight / 100;
document.documentElement.style.setProperty("--vh", `${vh}px`);

app.mount("#app");
