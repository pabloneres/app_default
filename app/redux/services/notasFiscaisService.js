import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "nota-fiscal";

/**
 * Get notas
 * @param {number} matricula
 * @param {data} startDate
 * @param {data} endDate
 * @returns {Promise<T>}
 */
export const getNotas = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/${options.matricula}/${options.startDate}/${options.endDate}`);
};

/**
 * Get baixar notas
 * @param {number} estabelecimento
 * @param {number} serie
 * @param {number} numero
 * @returns {Promise<T>}
 */
export const getNotasDownload = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/download/${options.estabelecimento}/${options.serie}/${options.numero}`);
};

