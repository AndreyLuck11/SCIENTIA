import Link from "next/link";
import "./Header.scss"
import LoginButton from "@/components/LoginButton/LoginButton";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="logo">
            <Link href="/">SCIENTIA</Link>
          </div>
          <div className="textItem">
            <Link href="/publications">Публикации</Link>
            <Link href="/authors">Авторы</Link>
            <Link href="/about">О проекте</Link>
          </div>
          <LoginButton/>
        </div>
      </div>
    </header>
  );
};

export default Header;
