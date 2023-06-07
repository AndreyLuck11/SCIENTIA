'use client';
import { useRouter } from "next/navigation";
import "./LoginButton.scss";
import { userAtom } from "@/store/userAtom";
import { useAtom } from "jotai";
import Image from "next/image";
import store from "store2"
import jwt_decode from 'jwt-decode';
import { LoginUserInfo } from "@/interfaces/LoginUserInfo";
import { useEffect, useLayoutEffect } from "react";

function LoginButton() {
	const router = useRouter();
	const [userInfo, setUserInfo] = useAtom(userAtom);

	useLayoutEffect(() => {
		if(store('access')) {
			const decodedToken = jwt_decode(store('access'));
			setUserInfo(decodedToken as LoginUserInfo)
		}
	}, [])

	return (
		<>
			{userInfo ?
				<div className="login-button">
					{userInfo.avatar_url ?
						<div className="login-button__avatar">
							<Image src={"http://localhost:8000/media/" + userInfo.avatar_url} alt=" " fill/>
						</div>
						: null
					}
					<div className="SignIn">
						{userInfo.last_name} {userInfo.first_name[0]}. {userInfo.patronymic[0]}.
					</div>

				</div>
				:
				<div className="login-button">
					<button onClick={() => router.push("/login")} type="button" className="SignIn">Войти</button>
				</div>
			}
		</>

	);
};

export default LoginButton;
