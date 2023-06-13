'use client';
import Link from "next/link";
import { useFormik} from 'formik';
import DefaultInput from "@/components/DefaultInput/DefaultInput"
import "./LoginForm.scss"
import { tryLogin } from "@/api/login";
import { useState } from "react";
import jwt_decode from 'jwt-decode';
import { TokenResponse } from "@/interfaces/tokens";
import { userAtom } from "@/store/userAtom";
import { useAtom } from 'jotai'
import { LoginUserInfo } from "@/interfaces/LoginUserInfo";
import { useRouter } from "next/navigation";
import store from "store2"
import Cookies from "js-cookie";


function LoginForm () {

	const [loginError, setLoginError] = useState(false);
	const [, setUserInfo] = useAtom(userAtom);
	const router = useRouter();


	const formik = useFormik({
		initialValues: {
			username: '',
			password: ''
		},
		onSubmit: async values => {
			try {
			 	let tokens: TokenResponse = await tryLogin("token/", values.username, values.password);
				const decodedToken = jwt_decode(tokens.access);
				if (decodedToken) {
					setUserInfo(decodedToken as LoginUserInfo);
					store("refresh", tokens.refresh);
					store("access", tokens.access);
					Cookies.set("refresh_token", tokens.refresh)
					Cookies.set("access_token", tokens.access)
					router.push('/');
				}
			} catch (e: any) {
				if(e.response.status === 401) {
					setLoginError(true)
				}
			}
		},
	});

    return (
	    <div className="container">
		    <div className="login-form">
			    <form className="login-form__form" onSubmit={formik.handleSubmit}>
				    <h1>Вход</h1>
				    <DefaultInput field={formik.getFieldProps('username')} type="text" placeholder="Логин"/>
				    <DefaultInput field={formik.getFieldProps('password')} type="password" placeholder="Пароль"/>
				    <button type="submit">Войти</button>
				    <Link href="/">Востановить пароль</Link>
				    {loginError ?
					    <div style={{color: "red"}}>Неверный логин или пароль</div>
					    : null
				    }
			    </form>
		    </div>
	    </div>
    );
}

export default LoginForm;
