import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "dossie-agricola-resumo-geral";

/**
 * Get all dossie agricola resumo
 * @param {object} options
 * @param {string} options.safra
 * @param {string} options.matricula
 * @returns {Promise<T>}
 */
export const getDossieResume = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/${options.safra}/${options.matricula}`);
};
