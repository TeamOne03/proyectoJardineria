// Selecciona el formulario de inicio de sesión por su ID
const iniciosesion_form = document.querySelector('#iniciosesion_form');

// Agrega un evento de escucha para el evento 'submit' del formulario
iniciosesion_form.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado de enviar el formulario

    // Obtiene el valor del campo de correo electrónico
    const correo = document.querySelector('#correo').value;

    // Obtiene el valor del campo de contraseña
    const pass = document.querySelector('#pass').value;

    // Obtiene los usuarios almacenados en el almacenamiento local o inicializa un array vacío si no hay ninguno
    const Users = JSON.parse(localStorage.getItem('users')) || [];

    // Busca un usuario en el array de usuarios que coincida con el correo electrónico y la contraseña ingresados
    const validUser = Users.find(user => user.email === correo && user.password === pass);

    // Si no se encuentra ningún usuario válido, muestra un mensaje de alerta y detiene el proceso
    if (!validUser) {
        return alert('Usuario y/o contraseña incorrectos!');
    }

    // Si se encuentra un usuario válido, muestra un mensaje de bienvenida con el nombre del usuario
    alert(`Bienvenido ${validUser.name}`);

    // Guarda los detalles del usuario en el almacenamiento local
    localStorage.setItem('login_success', JSON.stringify(validUser));

    // Redirige al usuario a la página de inicio
    window.location.href = 'index.html';
});

