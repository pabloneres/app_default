import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "funcionalidade";

/**
 * Get all funcionalidade
 * 
 * @returns {Promise<T>}
 */
export const getAllFunctionality = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/todas`);
};