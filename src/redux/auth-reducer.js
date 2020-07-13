const SET_AUTH_DATA = 'auth/SET_AUTH_DATA';
const SET_AUTH_OUT_DATA = 'auth/SET_AUTH_OUT_DATA';

let initialState = {
    login: null,
    password: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload
            };
        case SET_AUTH_OUT_DATA:
            return {
                ...state,
                isAuth: action.isAuth
            };
        default:
            return state;
    }
}

export const login = (login, password, isAuth) => {
    return {
        type: SET_AUTH_DATA, payload: {login, password, isAuth}
    }
}

export const logout = (isAuth) => {
    return {
        type: SET_AUTH_OUT_DATA, isAuth
    }
}

export default authReducer;