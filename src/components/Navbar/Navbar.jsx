import React from "react";
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <ul>
                <NavLink to={'/profile'}>
                    <li>Профиль</li>
                </NavLink>
                <NavLink to={'/dialogs'}>
                    <li>Сообщения</li>
                </NavLink>
                <NavLink to={'/users'}>
                    <li>Люди</li>
                </NavLink>
                <NavLink to={'/music'}>
                    <li>Музыка</li>
                </NavLink>
                <NavLink to={'/news'}>
                    <li>Новости</li>
                </NavLink>
                <NavLink to={'/settings'}>
                    <li>Настройки</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Navbar;