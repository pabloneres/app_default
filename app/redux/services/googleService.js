import axios from "axios";
import { API_GOOGLE_GEOCODING } from "~/config/general";


const basePath = "https://maps.googleapis.com/maps/api/geocode/json?"

/**
 * It takes in a set of coordinates and returns a promise that resolves to an object containing the
 * address of the coordinates
 * @param coords - The coordinates of the location you want to get the address for.
 * @returns An object with the address of the coordinates
 */
export const getAddressByCoords = (coords) => {
    return axios.get(`${basePath}latlng=${coords.latitude},${coords.longitude}&key=${API_GOOGLE_GEOCODING}`)
}