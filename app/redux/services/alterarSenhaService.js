import { api } from "./../../config/api";

const basePath = "auth";

/**
 * Put alterar senha
 *
 * @returns {Promise<T>}
 */
export const putAlterarSenha = (options) => {
    console.log("passou pela api de alterar senha", options);
    return api.put(`${basePath}/cooperados/senha`, options);
};