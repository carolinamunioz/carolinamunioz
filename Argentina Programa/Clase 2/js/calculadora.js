/*............ EJERCICIO 1 ................

1) ¿Que es el tercer parámetro recibido?
Una función de callback es una función que se pasa a otra función como parametro, que luego se invoca dentro de la función externa 
para completar algún tipo de rutina o acción.

2) ¿En que casos es obligatorio desarrollar este tipo de funciones?
Cuando necesitamos manejar asincronia en nuestro código.
 */

/*............. EJERCICIO 2 ................*/

function operar(operacion) {
    let a = Number(document.querySelector("#arg1").value);
    let b = Number(document.querySelector("#arg2").value);
    let resultado;
    switch (operacion) {
        case "sumar":
            resultado = a + b;
            break;
        case "restar":
            resultado = a - b;
            break;
        case "multiplicar":
            resultado = a * b;
            break;
        case "dividir": {
            if (b === 0) 
                alert("La división por 0 no existe. Ingresar otro número.");
            else
                resultado = a / b;
            break;
        }
    }    
    document.querySelector("#resultado").textContent = String(resultado); 
}

function resetCalculadora() {
    document.querySelector("form").reset();
    document.querySelector("#resultado").textContent = "Resultado de la operación";
}
