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



const AuthService = {
    getUserDetail,
    login,
    signUp,
};

export default AuthService;