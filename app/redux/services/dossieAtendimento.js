import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "dossie-agricola-atendimento";

/**
 * Get atendimentos
 * 
 * @returns {Promise<T>}
 */
export const getAtendimentos = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/do-periodo/${options.matricula}/${options.startDate}/${options.endDate}`);
};
