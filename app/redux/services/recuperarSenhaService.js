import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "auth";

/**
 * Get recuperar senha
 * @param {number} matricula
 * @returns {Promise<T>}
 */
export const getRecuperarSenha = (options) => {
    console.log("passou api recuperar senha",options);
    return api.get(`http://140.238.188.45/auth/recuperar-senha/${options.matricula}`);
};
