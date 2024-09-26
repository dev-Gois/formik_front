import Notify from "simple-notify";
import 'simple-notify/dist/simple-notify.css'

const token = localStorage.getItem('token');

if (!token) {
    window.location.href = '/login';
}

const loginSuccess = localStorage.getItem('loginSuccess');

if (loginSuccess) {
    localStorage.removeItem('loginSuccess');
    new Notify({
        title: 'Sucesso!',
        text: 'Login realizado com sucesso!',
        status: 'success'
    });
}

const alreadyLogged = localStorage.getItem('alreadyLogged');

if (alreadyLogged) {
    localStorage.removeItem('alreadyLogged');
    new Notify({
        title: 'Erro!',
        text: 'Você já está logado!',
        status: 'error'
    });
}

const registerSuccess = localStorage.getItem('registerSuccess');

if (registerSuccess) {
    localStorage.removeItem('registerSuccess');
    new Notify({
        title: 'Sucesso!',
        text: 'Cadastro realizado com sucesso!',
        status: 'success'
    });
}