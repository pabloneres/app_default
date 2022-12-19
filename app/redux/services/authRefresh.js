import axios from "axios";
import { API_URL, URLS } from "~/config/general";

const basePath = "auth";

/**
 * Refresh token
 *
 * @returns {Promise<T>}
 */
export const refreshToken = (options) => {
    return axios.post(`${API_URL}/${basePath}/refresh`, options);
};