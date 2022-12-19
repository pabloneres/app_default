import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "historico-vendas";

/**
 * Get All Products
 * @param {object} options
 * @param {number} options.matricula
 * @param {string} options.startDate
 * @param {string} options.endDate
 * @returns {Promise<T>}
 */
export const getAllSalesHistory = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/${options.matricula}/${options.startDate}/${options.endDate}`);
};

