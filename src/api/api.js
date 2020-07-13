import * as axios from 'axios';

const mockDB = {
    isAuth: false
}

export const authAPI = {
    me() {
        return axios.get(`/login`, mockDB.isAuth);
    },
    login() {
        return axios.post(`/login`, {mockDB: {isAuth: true}});
    },
    logout() {
        return axios.delete(`/login`, {mockDB: {isAuth: false}});
    }
}