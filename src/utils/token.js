import { VueCookieNext } from 'vue-cookie-next'



export function getToken(token){


}


//클라이언트의 쿠키에 Token을 저장
export function setToken(token){
    VueCookieNext.setCookie('token', token)
    console.log(VueCookieNext.getCookie('token'))
}

export function removeToken(token){


}






