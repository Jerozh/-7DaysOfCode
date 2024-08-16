
let nombre = prompt('¿Cual es tu nombre?');
let edad = prompt('¿Cuantos años tienes?');
let lenguaje = prompt('¿Que lenguaje de programacion estas estudiando?');
let otroLenguaje = '';

alert(`Hola ${nombre}, tienes ${edad} años y ya estas aprendiendo ${lenguaje}!`);
let cuestion = prompt(`¿Te gusta estudiar ${lenguaje} responde con el 1 para si o 2 para no`);

if(cuestion == 1){
    alert('¡ Muy bien! Sigue estudiando y tendras mucho exito.');
} else{
 alert('Oh, que pena...');
otroLenguaje = prompt(`¿Ya intentaste aprender otros lenguajes de programacion? responde con el 1 para si o 2 para no`);
}

if (otroLenguaje == 1){
    otroLenguaje = prompt('¡Que bueno! dime que lenguaje de programacion es:');
    alert(`Muy bien ${nombre}, espero que te guste mas ese ${otroLenguaje} y logres tener exito en su estudio!`);
} 


