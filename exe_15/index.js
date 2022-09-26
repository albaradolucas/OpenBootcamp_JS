const nombre = "Lucas";
const apellido = "González";
const nomCompleto = {nombre, apellido};

sessionStorage.setItem(nomCompleto, JSON.stringify(nomCompleto));
localStorage.setItem(nomCompleto, JSON.stringify(nomCompleto));

document.cookie = `nombreCookie=Lukies;expires=${new Date(now.getTime() + 2 * 60000)}`;