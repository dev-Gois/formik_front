import { api } from "../utils/api";

export const saveAuthToken = async (token, route) => {
    localStorage.setItem('token', token);
    
    if (route == 'login') {
        localStorage.setItem('loginSuccess', true);
    } else {
        localStorage.setItem('registerSuccess', true);
    }
    window.location.href = '/';
}

