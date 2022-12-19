import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "dossie";

/**
 * Get units
 * 
 * @returns {Promise<T>}
 */
export const getUnits = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/unidade`);
};

/**
 * Get projects
 * @param {object} options
 * @param {string} options.safra
 * @param {string} options.matricula
 * @returns {Promise<T>}
 */
export const getProjects = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/atendimentos-realisados/${options.safra}/${options.matricula}`);
};
