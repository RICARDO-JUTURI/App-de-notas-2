let fs = require('fs'); //Requerimos modulo nativo

function leerJSON() { //Funcion que nos permite leer y manipular el archivo json
    return JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'))
}//nos retorna la lectura del archivo json y lo parsea para que podamos manipularlo con js


function escribirJSON(masTareas) {
    let nuevoJSON = JSON.stringify(masTareas);//Mediante el método stringify pasamos a un tipo de dato json lo que reciba por parametro
    fs.writeFileSync("./tareas.json", nuevoJSON, "utf-8");
    //Primer parámetro archivo que vamos a reescribir, segundo parámetro el dato/información que vamos a insertar, tercer parámetro la codificación
}


function guardarTarea(titulo, estado) {
    let tareasAnteriores = leerJSON(); //listado de tareas

    let nuevaTarea = {
        titulo: titulo, //recibe como valor lo que ingresa por parámetro
        estado: estado //recibe como valor lo que se ingresa por parámetro
    }

    tareasAnteriores.push(nuevaTarea);//con el método push insertamos en la variable tareasAnteriores la nueva tarea creada

    escribirJSON(tareasAnteriores);//mediante el método escribirJSON reescribimos el archivo de tareas.json

}

function filtrarPorEstado(estado){
    let tareas = leerJSON();
   return tareas.filter(tarea => tarea.estado == estado); 
} //Método filter hacia el array de tareas y si tarea.estado es igual al estado que pase por parámetro me devolverá esas tareas


module.exports = { leerJSON, escribirJSON, guardarTarea, filtrarPorEstado }
//Siempre exportamos funciones que después las utilizaremos, irán entre {}