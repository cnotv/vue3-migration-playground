import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const app = createApp(App).use(store).use(router).mount("#app");

export function addLifecycleHook(
  vm: any,
  hook: string,
  fn: (fn: any) => Promise<void>
) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
