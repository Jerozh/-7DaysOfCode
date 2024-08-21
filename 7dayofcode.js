let numero = 0;
let numero2 = 0;
let elecc = '';
let resultado = 0;

function suma(numero, numero2){
    return numero + numero2;
}

function resta(numero, numero2){
    return numero - numero2;
}

function multiplicacion(numero, numero2){
    return numero * numero2;
}

function division(numero, numero2){
    if (numero2 === 0){
        alert('No se puede dividir entre cero');
        return null;
    }else{
    return numero / numero2;
}
}

function nums(){
numero = parseInt(prompt('Ingresa un numero'));
numero2 = parseInt(prompt('Ingresa un numero'));
}

while(elecc !== 'salir'){
elecc = prompt('Bienvenido, que operacion quieres realizar? Suma, Resta, Division, Multiplicacion o salir').toLowerCase();
if(elecc === 'salir'){
    alert('Hasta la proxima');
}else{
switch (elecc) {
    case 'suma':
        nums();
        resultado = suma(numero, numero2);
        alert(`El resultado es: ${resultado}`);
        break;
    case 'resta':
        nums();
        resultado = resta(numero, numero2);
        alert(`El resultado es: ${resultado}`);
        break;
    case 'multiplicacion':
        nums();
        resultado = multiplicacion(numero, numero2);
        alert(`El resultado es: ${resultado}`);
        break;
    case 'division':
        nums();
        resultado = division(numero, numero2);
        alert(`El resultado es: ${resultado}`);
       break;
    default:
    alert('Ingresaste un valor no valido')
    break;
}

}
}