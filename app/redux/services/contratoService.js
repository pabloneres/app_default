import { PATHS } from "~/config/general";
import { api } from "../../config/api";

const basePath = "contrato";

/**
 * Get contratos
 * @param {number} matricula
 * @returns {Promise<T>}
 */
export const getContratos = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/resumo/${options.matricula}`);
};

/**
 * Get detalhe contrato preço fixo
 * @param {number} matricula
 * @returns {Promise<T>}
 */
export const getDetalheContratos = (options) => {
    console.log("passou api contratos", options);
    return api.get(`${PATHS.cooperado}/${basePath}/preco-fixo/${options.matricula}`);
};

/**
 * Get detalhe contrato recibo depósito
 * @param {number} matricula
 * @returns {Promise<T>}
 */
export const getDetalheContratoReciboDeposito = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/recibo-deposito/${options.matricula}`);
};
