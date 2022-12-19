import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "unimed";

/**
 * Get unimed data
 *
 * @returns {Promise<T>}
 */
export const getUnimed = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/${options.matricula}/${options.month}/${options.year}`);
};

/**
 * Get unimed data
 *
 * @returns {Promise<T>}
 */
export const downlaodPdf = (options) => {
    return api.post(`${PATHS.cooperado}/${basePath}/chat-bot-link-pdf`, options);
};
