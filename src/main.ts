import { createApp, h } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./assets/main.css";

const app = createApp({
  render: () => h(App),
});

app.use(createPinia());

app.mount("#app");
