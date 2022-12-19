import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "noticias";

/**
 * Get noticias home
 * @returns {Promise<T>}
 */
export const getNoticiasHome = () => {
    return api.get(`${PATHS.service}/${basePath}/capa`);
};