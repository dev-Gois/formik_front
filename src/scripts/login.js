import { api } from "./utils/api";
import Notify from "simple-notify";
import 'simple-notify/dist/simple-notify.css'
import { saveAuthToken } from "./functions/saveAuthToken";

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.username.value;
    const password = form.password.value;
    
    try {
      const response = await api.post('/login', {}, {
          headers: {
              Authorization: `Basic ${btoa(`${name}:${password}`)}`
          }
      });
  
      if (response.status === 200) {
        await saveAuthToken(response.data.token, 'login');
      }
    } catch (error) {
      new Notify({
        title: 'Erro!',
        text: 'Usuário ou senha inválidos!',
        status: 'error'
      })
    }
});