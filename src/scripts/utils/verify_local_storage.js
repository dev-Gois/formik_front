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

const formSuccess = localStorage.getItem('formSuccess');

if (formSuccess) {
    localStorage.removeItem('formSuccess');
    new Notify({
        title: 'Sucesso!',
        text: 'Formulário criado com sucesso!',
        status: 'success'
    });
}

const deleteSuccess = localStorage.getItem('deleteSuccess');

if (deleteSuccess) {
    localStorage.removeItem('deleteSuccess');
    new Notify({
        title: 'Sucesso!',
        text: 'Formulário deletado com sucesso!',
        status: 'success'
    });
}

const formNotFound = localStorage.getItem('formNotFound');

if (formNotFound) {
    localStorage.removeItem('formNotFound');
    new Notify({
        title: 'Erro!',
        text: 'Formulário não encontrado!',
        status: 'error'
    });
}

const editedFormSuccess = localStorage.getItem('editedFormSuccess');

if (editedFormSuccess) {
    localStorage.removeItem('editedFormSuccess');
    new Notify({
        title: 'Sucesso!',
        text: 'Formulário editado com sucesso!',
        status: 'success'
    });
}