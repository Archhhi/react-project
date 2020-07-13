import React, {Component} from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import {withSuspense} from "./hoc/withSuspense";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import store from "./redux/redux-store";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <HeaderContainer/>
                    <div>
                        <Route exact path='/' render={() => <Redirect to={'/profile'} />} />
                        <Route exact path='/login' render={withSuspense(Login)} />
                        <Route exact path='/profile' render={withSuspense(ProfileContainer)} />
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

let AppContainer = compose(
    withRouter,
    connect()
)(App);

const MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp;