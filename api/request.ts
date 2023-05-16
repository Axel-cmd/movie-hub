import axios from "axios";
import config from "../config/config";

/**
 * Configuration par défaut pour faire des requêtes à l'api de film
 */
export const requestMovieAPI = axios.create({
    baseURL: config.DEFAULT_MOVIE_API_URI,
    headers: {
        "Accept": "application/json"
    },
    timeout: 1000
})
// intercepteur pour ajouter le paramètre "api_key" à chaque requête
requestMovieAPI.interceptors.request.use((paramConfig) => {
    // utilisé la config si elle a été passé 
    paramConfig.params = paramConfig.params || {};
    // ajouté le paramètre obligatoire pour la clé api
    paramConfig.params['api_key'] = config.MOVIE_API_KEY_V3;
    return paramConfig;
});