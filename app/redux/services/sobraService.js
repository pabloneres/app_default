import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "sobra";

/**
 * Get sobras
 * @param {number} matricula
 * @param {number} ano
 * @returns {Promise<T>}
 */
export const getSobras = (options) => {
    console.log("passou api sobras", options);
    return api.get(`${PATHS.cooperado}/${basePath}/${options.matricula}/${options.ano}`);
};

