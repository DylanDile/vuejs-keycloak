import Keycloak from 'keycloak-js';

const options = {
    url: import.meta.env.VITE_KEYCLOAK_URL,
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
    realm: import.meta.env.VITE_KEYCLOAK_REALM
}

const keycloak = new Keycloak(options);
let authenticated;
let store = null;

/**
 * Initializes Keycloak, then run callback. This will prompt you to login.
 */
async function init() {
    try {
        authenticated = await keycloak.init({ onLoad: "login-required" })
        if (authenticated) {
            console.log("User authenticated")
        }
    } catch (error) {
        console.error("Keycloak init failed")
        console.error(error)
    }
};

/**
 * Initializes store with Keycloak user data
 *
 */
async function initStore(storeInstance) {
    try {
        store = storeInstance
        await store.initOauth(keycloak)

        // Show alert if user is not authenticated
        if (!authenticated) { console.error("User not authenticated")}
    } catch (error) {
        console.error("Keycloak init failed")
        console.error(error)
    }
};

/**
 * Logout user
 */
function logout(url) {
    keycloak.logout({ redirectUri: url });
}

/**
 * Refreshes token
 */
async function refreshToken() {
    try {
        await keycloak.updateToken(480);
        return keycloak;
    } catch (error) {
        console.error('Failed to refresh token');
        console.error(error);
    }
}

const KeycloakService = {
    CallInit: init,
    CallInitStore: initStore,
    CallLogout: logout,
    CallTokenRefresh: refreshToken
};

export default KeycloakService;