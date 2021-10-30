window.onload = iniciar;


function iniciar() {
    document.getElementById('send').addEventListener('click', validate, false);
}



function validar_string(id) {
    let nombre = document.getElementById(id);
    if (nombre.value == '') {
        alert(`El campo ${id} no puede estar vacio`);
        return false;
    }
    return true;
}

function valor_dni() {
    let numero = document.getElementById('dni-Form');
    if (isNaN(numero.value)) {
        alert("El campo DNI debe ser numerico");
        return false;
    }
    if(numero.value>100000000){
        alert("Ingrese un valor con menos de 8 digitos sin puntos");
        return false;
    }
    return true;
}

function valido_edad(){
    let edad = document.getElementById('edad-Form');
    if((edad.value)>120){
        alert("Debe ingresar una edad real");
        return false;
    }
    return true;
}



function validate(e) {
    if (validar_string('nombre-Form') && valido_edad() && validar_string('apellido-Form')  && valor_dni() && confirm('Haga click en aceptar para enviar el form')) {
        return true;
    }
    return false
}