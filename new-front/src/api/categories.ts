import { api } from "@/api/config";

export async function fetchCategories(url: string): Promise<any> {
    const response = await api.get(url);
    return response.json();
}
