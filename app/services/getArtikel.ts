import { fetchAPI } from "../lib/api"
import { dataArtikel } from "../types";


export const getArtikel = async(): Promise<dataArtikel[]> => {
    
    const response = await fetchAPI<{items: dataArtikel[]}>('/feed/@ariswahyud86');
    return response.items;
}