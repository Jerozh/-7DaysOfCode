let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let producto = '';
let categoria = '';
let consulta ='';

function añadirElemento(){
producto = prompt('Que producto quieres agregar?');
categoria = prompt('En que categoria va este producto? frutas, lacteos, congelados, dulces').toLowerCase(); 
if(categoria == 'frutas'){
    frutas.push(producto);
}else if(categoria == 'lacteos'){
    lacteos.push(producto);
}else if(categoria == 'congelados'){
    congelados.push(producto);
}else if(categoria == 'dulces'){
    dulces.push(producto);
}else{
    alert('Categoría no reconocida, el producto no será agregado');
}
}
consulta = prompt('deseas agregar un alimento a tu lista de compras, debes responder con sí o no').toLowerCase(); 
while(consulta == 'si'){
    añadirElemento();
    consulta = prompt('deseas agregar un alimento a tu lista de compras, debes responder con sí o no').toLowerCase(); 
}
let listaDeCompras = '';

if (frutas.length > 0) listaDeCompras += 'Frutas:\n' + frutas.join('\n') + '\n\n';
if (lacteos.length > 0) listaDeCompras += 'Lácteos:\n' + lacteos.join('\n') + '\n\n';
if (congelados.length > 0) listaDeCompras += 'Congelados:\n' + congelados.join('\n') + '\n\n';
if (dulces.length > 0) listaDeCompras += 'Dulces:\n' + dulces.join('\n') + '\n\n';

if (listaDeCompras === '') {
    listaDeCompras = 'No has agregado ningún producto a la lista de compras.';
}

alert('Tu lista de compras:\n\n' + listaDeCompras);