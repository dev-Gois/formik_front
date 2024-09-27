export const getAuthToken = () => {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = '/login';
    }

    return token;
}