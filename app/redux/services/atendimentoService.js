import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "atendimento-servico";

/**
 * Get units
 * @param {object} options
 * @param {string} options.matricula
 * @param {string} options.startDate
 * @param {string} options.endDate
 * @returns {Promise<T>}
 */
export const getAtendimentos = (options) => {
    console.log(options)
    return api.get(`${PATHS.cooperado}/${basePath}/${options.matricula}/${options.startDate}/${options.endDate}`);
};

