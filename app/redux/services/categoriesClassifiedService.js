import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "categorias";

/**
 * Get all categories
 *
 * @returns {Promise<T>}
 */
export const getAllCategories = () => {
    return api.get(`${PATHS.classificado}/${basePath}`);
};