import React from "react";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./Login.module.css";
import {reduxForm} from "redux-form";
import {Input, createField} from "../common/FormControls/FormControls";
import style from "../common/FormControls/FormControls.module.css";
import {maxLengthCreator, required} from "../utils/validators/validators";
import Footer from "../Footer/Footer";

const maxLength20 = maxLengthCreator(20);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required, maxLength20], Input, {type: 'text'})}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Авторизироваться</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, true);
    }

    return (
        <div className={s.authBlock}>
            <h1>Авторизация</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(Login);