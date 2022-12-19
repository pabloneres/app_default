import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "preco-integrada";

/**
 * Get preços integrada
 * @param {number} matricula
 * @returns {Promise<T>}
 */
export const getPrecosIntegrada = (options) => {
    return api.get(`${PATHS.service}/${basePath}/${options.matricula}`);
};
