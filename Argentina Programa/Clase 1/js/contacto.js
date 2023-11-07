//Funcion para actualizar el monto del seguro segun el tipo
function actualizarMonto() {
    console.log("entre?");
    let tipoSeguro = document.getElementById("tipoSeguro").value;
    let montoTexto = document.getElementById("monto");
    console.log(tipoSeguro, montoTexto);

    switch (tipoSeguro) {
        case "basico": 
            montoTexto.textContent = "$500";
            break;
        case "intermedio":
            montoTexto.textContent = "$1000";
            break;
        case "premium":
            montoTexto.textContent = "$1500";
            break;
        default: montoTexto.textContent = "Seleccionar Tipo de Seguro";
    }
}

//......Funcion para tomar datos del form y enviarlo al backend.....
function enviar (form) {
    let nombre = form.name.value;
    let apellido = form.apellido.value;
    let dni = form.dni.value;
    let email = form.email.value;
    let telefono = form.telefono.value;
    let tipoSeguro = form.tipoSeguro.value;

    const params = {
        name: nombre,
        lastName: apellido,
        identification: dni,
        email: email,
        phone: telefono,
        insuranceType: tipoSeguro
    }

    //TO DO: Envio el endpoint al backend

    //Muestro un alert para informar al usuario que el form se envio correctamente
    alert("Su mensaje ha sido enviado. Nos contactaremos a la brevedad. Gracias!");
    //Limpio los valores del form
    resetForm();
}

//........Funcion para resetear el formulario......................

function resetForm() {
    document.querySelector("form").reset();
    let montoTexto = document.getElementById("monto").textContent="Seleccionar Tipo de Seguro";
}