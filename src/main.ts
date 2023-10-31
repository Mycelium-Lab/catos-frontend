import "./assets/styles/global.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { i18n } from "./i18n";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia()).use(router).use(i18n);
let vh = window.innerHeight / 100;
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
  // получаем текущее значение высоты
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

/*window.addEventListener("resize", () => {
  a = getMobileOperatingSystem();
  console.log(a);
  //app.config.globalProperties.isMobile = getMobileOperatingSystem();
});*/
// app.config.globalProperties.device = getMobileOperatingSystem();
app.mount("#app");
