import React from "react";
import style from "./Header.module.css";
import rocket from "../../assets/images/rocket.png";
import {NavLink} from "react-router-dom";

const Header = (props) => {

    const onSubmit = () => {
        props.logout(false);
    }

    return (
        <header className={style.header}>
            <div className={style.brendContainer}>
                <img src={rocket}/>
                <span className={style.brend}>REACT</span>

                <div className={style.loginBlock}>
                    { props.isAuth
                        ? <div>{props.login} - <button onClick={onSubmit}>Выйти</button></div>
                        : <NavLink to={'/Login'}><button>Войти</button></NavLink> }
                </div>
            </div>
        </header>
    )
}

export default Header;