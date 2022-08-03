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
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faGraduationCap,
  faGithub,
  faFacebook,
  faEnvelope,
  faGlobe,
  faPenRuler,
  faAngleLeft
);
createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
