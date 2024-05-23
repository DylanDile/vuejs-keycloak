import { defineStore } from "pinia";
import keycloakService from "../services/keycloakService.js";
export const useAuthStore = defineStore({
    id: "storeAuth",
    state: () => {
        return {
            authenticated: false,
            user: {},
            test: false
        }
    },
    persist: true,
    getters: {
        isAuthenticated(state){
            return state.authenticated;
        },
        loggedUser(state){
            return state.user;
        }
    },
    actions: {
        // Initialize Keycloak OAuth
        async initOauth(keycloak, clearData = true) {
            if(clearData) { await this.clearUserData(); }
            this.authenticated = keycloak.authenticated;
            this.user.username = keycloak.idTokenParsed?.preferred_username ?? "";
            this.user.email = keycloak.idTokenParsed?.email ?? "";
            this.user.name = keycloak.idTokenParsed?.family_name ?? "";
            this.user.last_name = keycloak.idTokenParsed?.given_name ?? "";
            this.user.token = keycloak.token;
            this.user.refToken = keycloak.refreshToken;

            console.log(this.user)
        },
        // Logout user
        async logout() {
            try {
                await keycloakService.CallLogout(import.meta.env.VITE_APP_URL);
                await this.clearUserData();
            } catch (error) {
                console.error(error);
            }
        },
        // Refresh user's token
        async refreshUserToken() {
            try {
                const keycloak = await keycloakService.CallTokenRefresh();
                await this.initOauth(keycloak, false);
            } catch (error) {
                console.error(error);
            }
        },
        // Clear user's store data
        clearUserData() {
            this.authenticated = false;
            this.user = {};
        }
    }
});