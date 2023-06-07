import { api } from "@/api/dataProvider";
import { TokenResponse } from "@/interfaces/tokens";

export async function tryLogin(key: string, username: string, password: string) : Promise<TokenResponse> {
	return await api.post(key, {json: {username, password}}).json();
}
