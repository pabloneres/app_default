import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "produtos-armazenados-fixar";

/**
 * Get All Products
 * @param {object} options
 * @param {number} options.matricula
 * @returns {Promise<T>}
 */
export const getAllProductsStore = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/resumido-item/${options.matricula}`);
};


/**
 * Get All Products
 * @param {object} options
 * @param {number} options.matricula
 * @param {number} options.item
 * @returns {Promise<T>}
 */
export const getProductStore = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/detalhado/${options.matricula}/${options.item}`);
};

