import { api } from "../utils/api";
import Notify from "simple-notify";
import 'simple-notify/dist/simple-notify.css'
import { getAuthToken } from "./getAuthToken";

export async function postForm(formObject) {
    const token = getAuthToken();
    api.defaults.headers['x-access-token'] = token;

    const response = await api.post('/forms', formObject);

    if (response.status === 200) {
        localStorage.setItem('formSuccess', 'true');
        window.location.href = '/';
    } else {
        new Notify({
            title: 'Erro!',
            text: 'Erro ao criar formulário!',
            status: 'error'
        })
    }
}