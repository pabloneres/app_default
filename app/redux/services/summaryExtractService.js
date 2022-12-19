import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "extrato-resumido";

/**
 * Get extract
 * @param {object} options
 * @param {string} options.matricula
 * @returns {Promise<T>}
 */
export const getExtract = (options) => {
	return api.get(`${PATHS.cooperado}/${basePath}/${options.matricula}`);
};
