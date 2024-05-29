import { createApp } from 'vue'

import { createPinia } from "pinia";
import piniaPluginPersistence from 'pinia-plugin-persistedstate';
import router from "./router";
import App from './App.vue'

import AuthStorePlugin from './plugins/authStorePlugin.js';

import keycloakService from "./services/keycloakService.js";

const pinia = createPinia();
pinia.use(piniaPluginPersistence);

const renderApp = () => {
    const app = createApp(App);
    app.use(AuthStorePlugin, { pinia });
    app.use(pinia);
    app.use(router);
    app.mount('#app');
}
keycloakService.CallInit(renderApp());