import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "pedidos";

/**
 * Get pedido
 * @param {number} matricula
 * @returns {Promise<T>}
 */
export const getPedido = (options) => {
    return api.get(`${PATHS.cooperado}/${basePath}/resumido/${options.matricula}`);
};

/**
 * Get pedido detalhe do pedido
 * @param {number} matricula
 * @param {number} numeroPedido
 * @returns {Promise<T>}
 */
export const getDetalhePedido = (options) => {
    console.log("passssssouy", options);
    return api.get(`${PATHS.cooperado}/${basePath}/detalhado/${options.matricula}/${options.numeroPedido}`);
};

/**
 * Get histórico de pedidos
 * @param {number} matricula
 * @param {date} startDate
 * @param {date} endDate
 * @returns {Promise<T>}
 */
export const getAllSalesHistory = (options) => {
    console.log("passssssouy historico", options);
    return api.get(`${PATHS.cooperado}/${basePath}/completo/${options.matricula}/${options.startDate}/${options.endDate}`);
};
