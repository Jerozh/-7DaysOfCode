let decision = '';
let areaElegida = '';
let decision2 = '';
let listaDeAprendizaje =[];

decision = prompt('Que te gustaria seguir estudiando, Front-End o Back-End?');
if(decision == 'front-end'){
    areaElegida = prompt('Excelente decision, querrias especializarte en React o Vue?').toLowerCase();
}else if(areaElegida == 'java'){
    alert(`Muy bien, espero que tengas mucho exito estudiando ${decision} con ${areaElegida}!`);
}else if(decision == 'back-end'){ 
    areaElegida = prompt('Excelente decision, querrias especializarte en C# o en Java?').toLowerCase();
}else if(areaElegida == 'react'){
    alert(`Genial, espero que tengas mucho exito estudiando ${decision} en ${areaElegida}!`);
}else{
    alert(`Genial, espero que tengas mucho exito estudiando ${decision} en ${areaElegida}!`);
}

decision = prompt(`Quieres seguir especializandote ${areaElegida} o desarrollarte para ser Fullstack?`).toLowerCase();

if(decision == 'fullstack'){
    alert(`Muchos exitos con tu carrera de ${decision}!`);
}else{
    alert(`Muchos exitos con tu carrera de ${decision}!`);
}

decision = prompt('te gustaria conocer o especializarte en otras tecnologias? responde si o no').toLowerCase();
if (decision == 'no'){
 alert('Esta bien, sigue disfrutando de lo que te guste');
}else{
    while(decision == 'si'){
        decision2 = prompt('Que es lo que te interesa conocer o especializarte?');
        listaDeAprendizaje.push(decision2); 
        alert(`espero que te vaya bien en ${decision2}`);
        decision = prompt('¿Hay alguna otra tecnología que te gustaría aprender? responde si o no').toLowerCase();
    }alert(`Esta son las tecnologias o materias que te interesan conocer o especializarte: ${listaDeAprendizaje}`);
}
