let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let producto = '';
let categoria = '';
let consulta ='';
let elimina = '';
let listaDeCompras = '';

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

function eliminarProductos(){
alert('Tu lista de compras:\n\n' + listaDeCompras);  
categoria = prompt('En que categoria se encuentra el producto que quieres eliminar?');
if(categoria == 'frutas'){
    producto = prompt('Que producto quieres eliminar');
    elimina = frutas.indexOf(producto);
        if(elimina === -1){
        alert('El producto no esta en la lista');    
        }else{
        frutas.splice(elimina, 1);
        }

  }else if(categoria == 'lacteos'){
    producto = prompt('Que producto quieres eliminar');
    elimina = lacteos.indexOf(producto);
    if(elimina === -1){
        alert('El producto no esta en la lista');    
        }else{
        lacteos.splice(elimina, 1);
        }
}else if(categoria == 'congelados'){
    producto = prompt('Que producto quieres eliminar');
    elimina = congelados.indexOf(producto);
        if(elimina === -1){
        alert('El producto no esta en la lista');    
        }else{
        congelados.splice(elimina, 1);
        }
}else if(categoria == 'dulces'){
    producto = prompt('Que producto quieres eliminar');
    elimina = dulces.indexOf(producto);
    if(elimina === -1){
        alert('El producto no esta en la lista');    
        }else{
        dulces.splice(elimina, 1);
        }
}else{
    alert('Categoría no reconocida, el producto no será eliminado');
}
}

function actualizarLista(){
    listaDeCompras = '';
    if (frutas.length > 0) listaDeCompras += 'Frutas:\n' + frutas.join('\n') + '\n\n';
    if (lacteos.length > 0) listaDeCompras += 'Lácteos:\n' + lacteos.join('\n') + '\n\n';
    if (congelados.length > 0) listaDeCompras += 'Congelados:\n' + congelados.join('\n') + '\n\n';
    if (dulces.length > 0) listaDeCompras += 'Dulces:\n' + dulces.join('\n') + '\n\n';
    
    if (listaDeCompras === '') {
        listaDeCompras = 'No has agregado ningún producto a la lista de compras.';
    }
    }

consulta = prompt('Para agregar un producto a tu lista de compras, debes responder agregar, para eliminar algun producto ingresa elminar o no para cancelar').toLowerCase(); 
while(consulta === 'agregar' || consulta === 'eliminar'){
if (consulta == 'eliminar'){
eliminarProductos();
//consulta = prompt('Para agregar un producto a tu lista de compras, debes responder agregar, para eliminar algun producto ingresa elminar o no para cancelar').toLowerCase();
}else{
añadirElemento();
//consulta = prompt('Para agregar un producto a tu lista de compras, debes responder agregar, para eliminar algun producto ingresa elminar o no para cancelar').toLowerCase(); 
}
actualizarLista();
consulta = prompt('Para agregar un producto a tu lista de compras, debes responder agregar, para eliminar algun producto ingresa elminar o no para cancelar').toLowerCase(); 
}


alert('Tu lista de compras:\n\n' + listaDeCompras);