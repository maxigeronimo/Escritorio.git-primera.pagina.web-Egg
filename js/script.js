function showAlert() { alert('¡Hola, esta es una alerta desde JavaScript!'); }

// Obtenemos el botón por su id
let boton = document.getElementById("miBoton");
// Añadimos un oyente de eventos que "escuche" el evento "click"
boton.addEventListener("click", function () { alert("¡Haz hecho clic en el botón y aprendiste a encontrarlo con id!"); });

// barra de navegacion
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function () {
        document.querySelector(".nav-links").
            classList.toggle("nav-links-responsive")
    }
    );


// Obtener el elemento del menú desplegable
const dropdown = document.querySelector('.dropdown');

// Agregar un evento de clic al elemento del menú desplegable
dropdown.addEventListener('click', function () {
    // Obtener el menú desplegable
    const dropdownMenu = this.querySelector('.dropdown-menu');

    // Alternar la clase "show" para mostrar u ocultar el menú desplegable
    dropdownMenu.classList.toggle('show');
});
