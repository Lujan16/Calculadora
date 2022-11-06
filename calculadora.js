// ingreso de  datos
let operacion = prompt("¿Qué tipo de operacion desea realizar? (+, -, / o *)")

let n1 = parseInt(prompt("Ingrese un numero"));
let n2 = parseInt(prompt("Ingrese otro numero"));

let resultado;

//operaciones 
switch(operacion){
    case "+": resultado=n1+n2;
    alert("El resultado de su operacion es: " + resultado);
        break;
    case "-": resultado=n1-n2;
    alert("El resultado de su operacion es: " + resultado);
        break;
    case "/": resultado=n1/n2;
    alert("El resultado de su operacion es: " + resultado);
        break;
    case "*": resultado=n1*n2;
    alert("El resultado de su operacion es: " + resultado);
        break;
    default: alert ("Ingrese una operacion admitida");
}