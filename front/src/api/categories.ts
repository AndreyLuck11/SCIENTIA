import { api } from "@/api/dataProvider";


export async function fetchCategories(url: string): Promise<any> {
    const response = await api.get(url);
    return response.json();
}
