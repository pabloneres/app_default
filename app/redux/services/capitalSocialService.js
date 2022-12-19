import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "capital-social";

/**
 * Get capital social
 * @param {number} matricula
 * @returns {Promise<T>}
 */
export const getCapitalSocial = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/${options.matricula}`);
};

