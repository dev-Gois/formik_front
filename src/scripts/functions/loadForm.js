import { api } from "../utils/api";
import { getAuthToken } from "./getAuthToken";

export async function loadForm(formId) {
    try {
        const token = getAuthToken();
        api.defaults.headers['x-access-token'] = token;
        
        const response = await api.get(`/forms/${formId}`);
    
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        localStorage.setItem('formNotFound', 'true');
        window.location.href = '/';
    }
}