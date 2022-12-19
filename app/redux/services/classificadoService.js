import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "classificados";

/**
 * Get all classificados
 *
 * @returns {Promise<T>}
 */
export const getAllClassificados = (options) => {
    const options_default = {};

    options = Object.assign({}, options_default, options);

    let params = [];
    let params_qs = "";

    if (options.hasOwnProperty("page")) {
        params.push(`page=${options.page}`);
    }

    if (options.hasOwnProperty("size")) {
        params.push(`size=${options.size}`);
    }

    if (options.hasOwnProperty("sort")) {
        params.push(`sort=${options.sort}`);
    }

    if (params.length) {
        params_qs = `?${params.join("&")}`;
    }

    return api.get(`${PATHS.classificado}/${basePath}${params_qs}`);
};

/**
 * Get classificados by categoie 
 * @param {number} categoieId
 * @returns {Promise<T>}
 */
export const getClassificadosBycategorieId = (options) => {
    return api.get(`${PATHS.classificado}/${basePath}/categorias/${options.categoieId}`);
};

/**
 * Create classificado
 * @param {number} categoieId
 * @returns {Promise<T>}
 */
export const createClassificado = (options) => {
    return api.post(`${PATHS.classificado}/${basePath}`, options);
};