import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "cooperados";

/**
 * Get cooperado
 * @param {number} matricula
 * @returns {Promise<T>}
 */
export const getCooperado = (options) => {
    return api.get(`${PATHS.classificado}/${basePath}/${options.matricula}`);
};
