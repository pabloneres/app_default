import { PATHS } from "~/config/general";
import { api } from "./../../config/api";
import { appendToFormData } from "./../../helpers/form";

const basePath = "retorno-dados-pessoais";

/**
 * Get logged user
 *
 * @returns {Promise<T>}
 */
export const getUserData = (data) => {
	return api.get(`${PATHS.cooperado}/${basePath}/confirmacao-pendente/${data}`);
};


