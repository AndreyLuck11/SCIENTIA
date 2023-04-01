import { Filter } from "@/components/shared/interfaces";
import { api } from "@/api/config";

export async function fetchFilters(url: string): Promise<Filter[]> {
    const response = await api.get(url);
    return response.json();
}
