import "./assets/styles/global.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import getMobileOperatingSystem from "./utils/defineDevice";

const app = createApp(App);

app.use(createPinia());
app.use(router);

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
