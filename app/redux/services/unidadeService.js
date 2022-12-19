import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "estabelecimento";

/**
 * Get cooperado
 * @returns {Promise<T>}
 */
export const getUnidade = () => {
    return api.get(`${PATHS.cooperado}/${basePath}`);
};
