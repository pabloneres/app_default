import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "imposto-renda";

/**
 * Get tax
 * @param {object} options
 * @param {string} options.matricula
 * @param {string} options.year
 * @returns {Promise<T>}
 */
export const getTax = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/${options.matricula}/${options.year}`);
};

/**
 * Get years
 *
 * @returns {Promise<T>}
 */
export const getYears = () => {
    return api.get(`${PATHS.cooperado}/${basePath}/ano-disponivel`);
};
