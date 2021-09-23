import axios from 'axios';

export function login(params){
    return axios({
        url: '/api/user/Login/do',
        method : 'post',
        data : params
    });
}

export function logout(params){
    return axios({
        url : 'api/usre/logout',
        method : 'post',
        data : params
    })
}

export function getInfo(params){
    return axios({
        url : 'api/user/getInfo',
        method : 'post',
        data : params
    })
}