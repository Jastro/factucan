import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
const app = createApp(App);

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

app.use(PrimeVue);
createApp(App).mount("#app");
