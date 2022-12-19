import { PATHS } from "~/config/general";
import { api } from "../../config/api";

const basePath = "noticias";


/**
 * Get logged user
 *
 * @returns {Promise<T>}
 */

export const getNoticias = () => {
    return api.get(`${PATHS.service}/${basePath}/capa`);
};


