import cookie from 'cookiejs';

const adminToken = 'admin_token'
const usernameT = 'username'

export function getToken() {
    return cookie.get(adminToken);
}

export function setToken(toKen) {
    return cookie.set(adminToken, toKen);
}

export function removeToken() {
    console.log("删除 adminToken")
    return cookie.remove(adminToken);
}

export function setUserName(user) {
    return cookie.set(usernameT, user);
}

export function getUserName() {
    return cookie.get(usernameT);
}

export function removeUsername() {
    console.log("删除 usernameT")
    return cookie.remove(usernameT);
}