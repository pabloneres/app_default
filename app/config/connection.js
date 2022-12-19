// -----------------------------------------------------------------------------
// Connection
// -----------------------------------------------------------------------------
export let IS_CONNECTED = true;
export let IS_MODE_OFFLINE = false;

export const setOnline = (bool) => {
	IS_CONNECTED = bool;
};

export const getConnected = () => {
	return IS_CONNECTED;
};

export const isOnline = () => {
	return IS_CONNECTED === true;
};

export const isOffline = () => {
	return IS_CONNECTED === false;
};

export const setModeOffline = (bool) => {
	IS_MODE_OFFLINE = bool;
};

export const getModeOffline = () => {
	return IS_MODE_OFFLINE;
};
