import { api } from "@/api/config";

export async function fetchUsers(url: string) {
    const response = await api.get(url);
    return response.json();
}
