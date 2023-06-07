import {Publication, PublicationDetail} from "@/interfaces/interfaces";
import { api, objectToQueryString } from "@/api/dataProvider";


export async function fetchPublications(url: string, filterParams: any): Promise<Publication[]> {
    const queryString = objectToQueryString(filterParams);
    const response = await api.get(url, { searchParams: queryString });
    return response.json();
}

export async function fetchPublicationDetail(url: string): Promise<PublicationDetail> {
    const response = await api.get(url);
    return response.json();
}
