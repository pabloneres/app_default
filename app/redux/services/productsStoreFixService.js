import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "produtos-armazenados-fixar";

/**
 * Get all delivery
 * @param {object} options
 * @param {string} options.matricula
 * @returns {Promise<T>}
 */
export const getFixedProducts = (options) => {
	return api.get(`${PATHS.cooperado}/${basePath}/resumido-familia/${options.matricula}`);
};
