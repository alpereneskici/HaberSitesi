import { instance, config } from "./baseApi"


const getUserDetail = () => {
    return instance.get(`/user/details/`, { ...config() });
};


const login = (body) => {
    return instance.post(
        "/user/login/", body, {  headers: {
            'Content-Type': 'application/json'
        } }
    )
}


const signUp = (body) => {
    console.log(body);
    return instance.post(
        "/user/register/", body, {  headers: {
            'Content-Type': 'application/json'
        } }
    )
}
const forgetPass = (body) => {
    console.log(body);
    return instance.post(
        "/user/forget-password/", body, {  headers: {
            'Content-Type': 'application/json'
        } }
    )
}

const confirmPass = (token,body) => {
    console.log(token,body);
    return instance.post(
        `/user/reset/`, body, {  headers: {
            'Content-Type': 'application/json'
        } }
    )
}

const logOut = () => {
    return instance.get(
        `/user/logout/`, config() 
    )
}



const AuthService = {
    getUserDetail,
    login,
    signUp,
    forgetPass,
    confirmPass,
    logOut
};

export default AuthService;