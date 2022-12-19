import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "safra";

/**
 * Get safras
 * 
 * @returns {Promise<T>}
 */
export const getAllSafras = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/todas-safras`);
};
