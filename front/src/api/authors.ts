
import { Author, AuthorDetail } from "@/interfaces/interfaces";
import { api } from "@/api/dataProvider";

export async function fetchUsers(url: string): Promise<Author[]> {
    const response = await api.get(url);
    return response.json();
}

export async function fetchUser(url: string): Promise<AuthorDetail> {
    const response = await api.get(url);
    return response.json();
}
