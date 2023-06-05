import React from 'react';
import Link from 'next/link';
import router from "next/router";

function Header() {
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <Link href="/">SCIENTIA</Link>
                    </div>
                    <div className="textItem">
                        <Link href="/publications">Публикации</Link>
                        <Link href="/authors">Авторы</Link>
                        <Link href="/about">О проекте</Link>
                    </div>
                    <div className="login">
                        <button onClick={() => router.push('/login')} type="button" className="SignIn">Войти</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
