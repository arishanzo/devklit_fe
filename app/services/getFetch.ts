import { fetchAPI } from "../lib/api"
import { Artikel } from "../types";


export const getArtikel = async(): Promise<Artikel[]> => {

    const response = await fetchAPI<{data: Artikel[]}>('/feed/@ariswahyud86');
    return response.data;
}