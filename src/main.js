import { createApp } from "vue";
import App from "./App.vue";

//路由
import router from "./routes";
//状态管理 vuex
import store from "./stores";

//全局样式
import "styles/index.scss";

//element3-plus
import elementPlus from "plugins/elementPlus";;;;

createApp(App)
  .use(router)
  .use(store)
  .use(elementPlus)
  .mount("#app");
