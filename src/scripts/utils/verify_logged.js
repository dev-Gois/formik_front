import { api } from "./api";

const token = localStorage.getItem('token');
const token_in_header = api.defaults.headers['x-access-token'];

console.log('token', token);
console.log('token_in_header', token_in_header);

if (token && token_in_header && token === token_in_header) {
    localStorage.setItem('alreadyLogged', true);
    window.location.href = '/';
}
  