

function calcular() {
    const numero1 = parseFloat(prompt("Ingresa el primer numero:"));
    const numero2 = parseFloat(prompt("Ingresa el segundo numero:"));

    const operacion = prompt("Elige la operacion: +  -  *  /");


    /*Esto sirve para comporobar que mis numeros sean un valor correcto y no un caracter o algo asi era*/ 
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("error. numeros no validos");
        return;
    }

    let resultado;

    switch (operacion) {
        case '+':
            resultado = numero1 + numero2;
            break;

        case '-':
            resultado = numero1 - numero2;
            break;

        case '*':
            resultado = numero1 * numero2;
            break;

        case '/':
            if (numero2 === 0) {
                alert("No se puede dividir por cero.");
                return;
            } else {
                resultado = numero1 / numero2;
            }
            break;
        default:
            alert("Error en la matrix");
            return;

    }

    /*El alert lo use para arrojar una ventana con el resultado de la operacion*/ 
    alert(`El resultado es: ${resultado}`);
}

/*Tarde media hora descubriendo por que no funcionaba mi codigo y me falto esto*/
calcular();
