import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "estatuto-social";

/**
 * Get estatuto social
 *
 * @returns {Promise<T>}
 */
export const getEstatuto = () => {
    return api.get(`${PATHS.cooperado}/${basePath}`);
};
