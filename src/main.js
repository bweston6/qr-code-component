import "./assets/main.css";

import App from "./App.vue";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      "qr-code": {
        alt: "qr code",
        title: "Improve your front-end skills by building projects",
        body: "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
      },
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});
const app = createApp(App);

app.use(i18n);
app.mount("#app");
