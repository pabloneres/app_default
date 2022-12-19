import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "mensagem";

/**
 * Get all messages
 * @param {number} matricula
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {Promise<T>}
 */
export const getAllMessages = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/todas/${options.matricula}/${options.startDate}/${options.endDate}`);
};

/**
 * Get new messages
 * @param {number} matricula
 * @returns {Promise<T>}
 */
export const getNewMessages = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/novas/${options.matricula}`);
};

/**
 * Get message
 * @param {number} id
 * @returns {Promise<T>}
 */
export const getMessage = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/id/${options.id}`);
};

/**
 * Remove all messages
 * @param {number} id
 * @returns {Promise<T>}
 */
export const removeAllMessages = (options) => {
    return api.delete(`${PATHS.cooperado}/${basePath}/todas/${options.matricula}`);
};

/**
 * All read messages
 * @param {number} id
 * @returns {Promise<T>}
 */
export const allReads = (options) => {
    return api.put(`${PATHS.cooperado}/${basePath}/todas-lidas/${options.matricula}`);
};
