import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "cultura";

/**
 * Get cultures
 * 
 * @returns {Promise<T>}
 */
export const getAllCultures = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}`);
};
