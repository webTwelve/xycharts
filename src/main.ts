import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import XYCharts from "./components/xycharts";
const app = createApp(App);
app.use(XYCharts);
app.mount("#app");
