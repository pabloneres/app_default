import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "conta-a-receber";

/**
 * Get All BillsToPay
 * @param {object} options
 * @param {number} options.matricula
 * @returns {Promise<T>}
 */
export const getAllBillsToReceive = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/resumido/${options.matricula}`);
};

/**
 * Get BillsToPay
 * @param {object} options
 * @param {number} options.matricula
 * @param {number} options.code
 * @param {number} options.unitCode
 * @returns {Promise<T>}
 */
export const getBillsToReceive = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/detalhado/${options.matricula}/${options.code}/${options.unitCode}`);
};
