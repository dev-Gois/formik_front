import { api } from "../utils/api";
import { getAuthToken } from "./getAuthToken";

export async function getUserForms() {
    const token = getAuthToken();
    api.defaults.headers['x-access-token'] = token;
    
    const response = await api.get('/forms');

    if (response.status === 200) {
        return response.data;
    }

    return [];
}