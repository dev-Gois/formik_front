import { api } from "../utils/api";
import Notify from "simple-notify";
import 'simple-notify/dist/simple-notify.css'
import { getAuthToken } from "./getAuthToken";

export async function editForm(formObject, formId) {
    const token = getAuthToken();
    api.defaults.headers['x-access-token'] = token;

    const response = await api.put(`/forms/${formId}`, formObject);

    if (response.status === 200) {
        localStorage.setItem('editedFormSuccess', 'true');
        window.location.href = '/';
    } else {
        new Notify({
            title: 'Erro!',
            text: 'Erro ao criar formulário!',
            status: 'error'
        })
    }
}