import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { registerModules } from "./RegisterModules";
import * as Auth from "./auth";
import * as General from "./general";

import "./assets/styles/main.css";

registerModules({
  Auth,
  General,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
