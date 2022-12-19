import { PATHS } from "~/config/general";
import { api } from "../../config/api";

const basePath = "dossie-agricola-resumo-area";

/**
 * Get all dossie agricola detail
 * @param {object} options
 * @param {string} options.dossieId
 * @returns {Promise<T>}
 */
export const getDossieDetail = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/buscarTodos/${options.dossieId}`);
};
