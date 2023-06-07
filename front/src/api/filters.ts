import { Filter } from "@/interfaces/interfaces";
import { api } from "@/api/dataProvider";


export async function fetchFilters(url: string): Promise<Filter[]> {
    const response = await api.get(url);
    return response.json();
}
