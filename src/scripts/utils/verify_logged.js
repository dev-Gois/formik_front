const token = localStorage.getItem('token');
if (token) {
    localStorage.setItem('alreadyLogged', true);
    window.location.href = '/';
}
  