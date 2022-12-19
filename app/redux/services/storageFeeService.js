import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "inicio-cobranca";

/**
 * Get All Products
 * @param {object} options
 * @param {number} options.matricula
 * @returns {Promise<T>}
 */
export const getAllStoreFee = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/${options.matricula}`);
};

