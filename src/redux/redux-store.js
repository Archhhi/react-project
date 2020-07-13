import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import profileReducer from "./profile-reducer";
import thunkMiddleWare from "redux-thunk";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    ProfilePage: profileReducer,
    auth: authReducer,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));
window.__store__ = store;

export default store;