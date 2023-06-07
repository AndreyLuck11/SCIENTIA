export interface LoginUserInfo {
	token_type: string;
	exp: number;
	jti: string;
	user_id: number;
	username: string;
	email: string;
	last_name: string;
	first_name: string;
	patronymic: string;
	avatar_url: string;
}
