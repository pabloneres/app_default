import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "noticias";

/**
 * Get noticias
 * @returns {Promise<T>}
 */
export const getNoticias = () => {
    return api.get(`${PATHS.service}/${basePath}/capa`);
};


/**
 * Get detalhes noticias
 * @param {number} id
 * @returns {Promise<T>}
 */
export const getDetalhesNoticias = (options) => {
    return api.get(`${PATHS.service}/${basePath}/${options.id}`);
};