
import {
    CHANGE_PASSWORD_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,

    SIGNUP_SUCCESS,
    SIGNUP_FAIL,

    LOGOUT,
} from './types';

import AuthService from '../api/auth';
export const loadUser = () => async dispatch => {
    if (localStorage.getItem('token')) {
        try {
            const res = await AuthService.getUserDetail();
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            localStorage.removeItem('token');
            dispatch({
                type: USER_LOADED_FAIL
            });
        }
    } else {
        dispatch({
            type: USER_LOADED_FAIL
        });
    }
};


export const login = (email, password) => async dispatch => {

    const body = JSON.stringify({ email, password });

    try {
        const res = await AuthService.login(body);
        console.log(res);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.token
        });
        dispatch(loadUser())
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
};

export const signup = (props) => async dispatch => {

    const body = JSON.stringify({...props});

    try {
        const res = await AuthService.signUp(body);
        console.log(res);
        return res.status === 200
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        })
    }
};

export const forget_password = (email) => async dispatch => {
    const body = JSON.stringify({
        email,
    });
    try {
        await AuthService.forgetPass( body);
        dispatch({
            type: CHANGE_PASSWORD_SUCCESS
        });
    } catch (err) {
    }
};


export const forgot_password_confirm = (token, password) => async dispatch => {
    const body = JSON.stringify({token, password });
    try {
        await AuthService.confirmPass(token, body);


    } catch (err) {

    }
};

// export const logout = () => async dispatch => {
//     let token = localStorage.getItem('token');
//     const config = {
//         headers: {
//             'Content-Type': 'application/json',
//             "Authorization": `token ${token}`,
//         }
//     };
//     try {
//         await instance.get(`/auth/logout/`, config);
//         dispatch({
//             type: LOGOUT
//         });
//     } catch (err) {

//     }
// };

