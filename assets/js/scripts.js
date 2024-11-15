// Función para mostrar/ocultar detalles adicionales de los proyectos
function toggleInfo(button) {
    const info = button.closest('.proyecto').querySelector('.expandir-info');
    if (info.style.display === 'none' || info.style.display === '') {
        info.style.display = 'block';
        info.style.animation = 'fadeIn 0.5s ease'; // Animación de aparición
        button.textContent = 'Ocultar';
    } else {
        info.style.display = 'none';
        button.textContent = 'Más';
    }
}

// Animación suave para desplazarse a secciones del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Obtener el ID del destino
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
        }
    });
});

// Validación del formulario de contacto
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
        e.preventDefault(); // Cancelar envío
        alert('Por favor, complete todos los campos.'); // Advertencia al usuario
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        e.preventDefault(); // Cancelar envío
        alert('Por favor, ingrese un email válido.'); // Advertencia para email inválido
    }
});


// Bloqueo de acceso a herramientas de desarrollo (Ctrl+U, F12) y clic derecho
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault(); // Bloquea Ctrl+U
        alert('Acceso denegado.'); // Mensaje de advertencia
    }
    if (e.key === 'F12') {
        e.preventDefault(); // Bloquea F12
        alert('Acceso denegado.'); // Mensaje de advertencia
    }
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Bloquea clic derecho
    alert('El clic derecho está deshabilitado.'); // Mensaje de advertencia
});
