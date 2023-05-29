import { api } from "@/api/config";
import { Author, AuthorDetail } from "@/components/shared/interfaces";

export async function fetchUsers(url: string): Promise<Author[]> {
    const response = await api.get(url);
    return response.json();
}

export async function fetchUser(url: string): Promise<AuthorDetail> {
    const response = await api.get(url);
    return response.json();
}
