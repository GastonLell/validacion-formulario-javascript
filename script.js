// guardo elementos en formularios
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const form = document.getElementById('form');
const mensajeCliente = document.getElementById('mensaje-cliente');

// evento al enviar formulario
form.addEventListener('submit', e => {

    e.preventDefault();
    
    // inicio el mensaje al cliente vacio por si ya envió y muestra algun error anterior
    mensajeCliente.innerHTML = "";

    // creo variable para ir guardando los errores
    let mensajeError = "";

    // variable para saber si entro a algun error
    let entrar = false;

    // expresiones regulares 
    let expresionRegularEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let expresionRegularNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/ 

    // validacion caracteres del nombre
    if(nombre.value.length < 6){
        mensajeError += `El nombre debe tener seis o más caracteres <br>`;
        entrar = true;
    }

    // validacion para que el nombre solo tenga letras, espacios y acentos
    if(!expresionRegularNombre.test(nombre.value)){
        mensajeError += `El nombre solo puede llevar letras y espacios <br>`;
        entrar = true;
    }

    // validacion para que el email tenga letras, el @, el punto y un dominio.
    if(!expresionRegularEmail.test(email.value)){
        mensajeError += `El email no es valido <br>`;
        entrar = true;
    }

    // validacion para el mensaje, debe contener algo escrito
    if(mensaje.value.length === 0){
        mensajeError += `Campo de mensaje vacio!`;
        entrar = true;
    }

    // si entro a algun error la variable entrar es "true" por lo que entra a la  siguiente condicion
    // generando un mensaje de error al cliente con lo que debe corregir
    if(entrar){
        mensajeCliente.style.border = "1px solid red";
        mensajeCliente.innerHTML = mensajeError;
    }

    // si entrar sigue siendo "false" significa que no entro a un error de validacion
    // todos los campos son correctos, por lo que entra a la siguiente condicion
    // enviando un mensaje exitoso al cliente
    if(!entrar){
        mensajeCliente.style.border = "1px solid green";
        mensajeCliente.innerHTML = `El formulario se envio correctamente!`;

        // al ser exitoso el envio se limpian los inputs
        e.target.reset();
    }

})
