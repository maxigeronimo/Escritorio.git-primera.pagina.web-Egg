// Encuentra al elemento HTML (el botón) mediante su ID
const miBoton = document.getElementById('miBoton');

// Define la función que se ejecutará cuando se haga clic en el botón
function handleClick() {
    alert('¡Hola! Has hecho clic en el botón.');
}

// Validacion para formulario
const form = document.getElementById('myForm');
if(form){
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});  
}


function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}
function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electrónico válido.');
    } else {
        alert('Correo electrónico enviado correctamente.');
    }
}