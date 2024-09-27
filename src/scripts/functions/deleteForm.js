import { api } from "../utils/api";
import Notify from "simple-notify";
import 'simple-notify/dist/simple-notify.css'
import { getAuthToken } from "./getAuthToken";

export async function deleteForm(formId) {
    const token = getAuthToken();
    api.defaults.headers['x-access-token'] = token;
    api.defaults.headers['Content-Type'] = 'application/json';

    const response = await api.delete(`/forms/${formId}`);

    console.log(response);

    if (response.status === 200) {
        localStorage.setItem('deleteSuccess', true);
        new Notify({
            title: 'Sucesso!',
            text: 'Formulário deletado com sucesso!',
            status: 'success'
        })
        window.location.reload();
    } else {
        new Notify({
            title: 'Erro!',
            text: 'Erro ao deletar formulário!',
            status: 'error'
        })
    }
}