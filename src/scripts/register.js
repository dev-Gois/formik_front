import { api } from "./utils/api";
import Notify from "simple-notify";
import 'simple-notify/dist/simple-notify.css'
import { saveAuthToken } from "./functions/saveAuthToken";
const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.username.value;
    const password = form.password.value;

    const confirmPassword = form['confirm-password'].value;

    if (password !== confirmPassword) {
        new Notify({
            title: 'Erro!',
            text: 'As senhas não coincidem!',
            status: 'error'
        });
        return;
    }

    try {
        const response = await api.post('/users', {
            username: name,
            password: password
        });

        if (response.status === 201) {
            saveAuthToken(response.data.token, 'register');
        }
    } catch (error) {
        new Notify({
            title: 'Erro!',
            text: 'Usuário já cadastrado!',
            status: 'error'
        })
    }
});