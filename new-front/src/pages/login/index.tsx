import React from "react";
import Link from "next/link";
import styles from "./LoginPage.module.scss"

function LoginPage() {
    return (
        <div className="container">
            <div className={styles.LoginPage}>
                <div className={styles.Form}>
                    <h1>Вход</h1>
                    <input type="text" placeholder="Логин"/>
                    <input type="password" placeholder="Пароль"/>
                    <button type="submit">Войти</button>
                    <Link href="/">Востановить пароль</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
