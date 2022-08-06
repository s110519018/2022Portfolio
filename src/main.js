import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGraduationCap,
  faEnvelope,
  faGlobe,
  faPenRuler,
  faAngleLeft,
  faSpinner,
  faLaptopCode,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from "./store";

library.add(
  faGraduationCap,
  faGithub,
  faFacebook,
  faEnvelope,
  faGlobe,
  faPenRuler,
  faAngleLeft,
  faSpinner,
  faLaptopCode,
  faLightbulb
);

createApp(App)
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
