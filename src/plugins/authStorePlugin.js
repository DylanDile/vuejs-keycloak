import { useAuthStore } from "../stores/authStore.js";
import keycloakService from "../services/keycloakService.js";
import setupInterceptors from '../services/tokenInterceptor.js';

const authStorePlugin = {
    install(app, option) {
        const store = useAuthStore(option.pinia);

        // Global store
        app.config.globalProperties.$store = store;

        // Store keycloak user data into store
        keycloakService.CallInitStore(store);

        setupInterceptors(store);
    }
}

export default authStorePlugin;