import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "previsaoTempo";

/**
 * Get previsão do tempo
 * @param {string} codigoCidade 
 * @returns {Promise<T>}
 */
export const getPrevisaoTempo = (options) => {
    return api.get(`${PATHS.service}/${basePath}/${options.codigoCidade}`);
};



