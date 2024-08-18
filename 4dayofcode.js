let numeroSecreto = Math.floor(Math.random() * 11);
let intentosRealizados = 0;
console.log(numeroSecreto)
for (let intentosRestantes = 0; intentosRestantes <= 2; intentosRestantes++){
let intento = parseInt(prompt('Ingresa un numero del 1 al 10, tienes 3 intentos para adivinar'));
if(numeroSecreto > intento){
    alert('El numero secreto es mayor');
}else if(numeroSecreto < intento){
    alert('El numero secreto es menor');
}else{
    alert(`Felicitaciones, adivinaste el numero secreto en ${intentosRealizados+intentosRestantes+1} ${(intentosRealizados === 0) ? 'intento' : 'intentos'}`);
    break;
}
if(intentosRestantes >= 2){
    alert(`OUH, no lograste adivinar el numero secreto, era ${numeroSecreto}`)
}
}

