import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "imovel";

/**
 * Get properties data
 *
 * @returns {Promise<T>}
 */
export const getProperties = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/${options.matricula}`);
};
