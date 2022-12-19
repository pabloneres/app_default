import { PATHS } from "~/config/general";
import { api } from "./../../config/api";

const basePath = "entrega-producao";

/**
 * Get all delivery
 * @param {object} options
 * @param {string} options.matricula
 * @param {string} options.selectedPropertie
 * @param {string} options.selectedSafra
 * @param {string} options.selectedCulture
 * @returns {Promise<T>}
 */
export const getAllDelivery = (options) => {
	return api.get(`${PATHS.cooperado}/${basePath}/safra/${options.matricula}/${options.selectedPropertie}/${options.selectedSafra}/${options.selectedCulture}`);
};

/**
 * Get all delivery
 * @param {object} options
 * @param {string} options.matricula
 * @param {string} options.selectedSafra
 * @param {string} options.pathName
 * @returns {Promise<T>}
 */
export const getExportData = (options) => {
	return api.get(`${PATHS.cooperado}/${basePath}/chat-bot/${options.matricula}/${options.selectedSafra}/${options.pathName}`);
};
