let funciones = require('./funcionesDeTareas');//Y al requerirlas llamamos al archivo completo en donde traen esas funciones, no a las funciones en si
let process = require('process')//requerimos modulo nativo process que con su metodo argv nos permite interactuar con la consola

let anotaciones = process.argv[2]//en el indice 2 de process voy a indicar la accion que requiero utilizar


switch (anotaciones) {//evaluamos la variable anotaciones
    case 'listar': //si anotaciones es igual a "listar"
        let tareas = funciones.leerJSON(); //le indico que use la funcion de leerJson que es una de las funciones que requiero

        if (tareas.length == 0) {
            console.log("Ups! Tenés la lista vacia");
        } else {
            console.log("MI LISTA DE TAREAS :)")
            console.log("---------------------")

            tareas.forEach(tarea => {
                console.log(`Titulo: ${tarea.titulo} // ${tarea.estado}`)
            }) //Solo recorre y devuelve el mismo array, se imprimen en consola el titulo y estado
        }

        /*
        for (let i = 0; i < tareas.length; i++) {           <- iteramos lista de tarea/Podemos usar el for pero es mas sencillo el forEach
            console.log(`Titulo: ${tareas[i].titulo} // ${tareas[i].estado}`);  
        }     ${} Me permite combinar strings y variables sin tener que usar el + y concatenar 
        */

        break;

    case "crear":
        let titulo = process.argv[3];
        let estado = process.argv[4]; //en la consola escribo entre comillas este strings, algo como "en progreso", asi me lo toma como un solo indice 

        if (titulo && estado) { //Si titulo y estado existen pasa a funcionar la funcion guardar tarea
            funciones.guardarTarea(titulo, estado)
            console.log("Agregaste una nueva tarea :)")
        } else {
            console.log("Necesitás pasar un título y un estado para crear una nueva tarea");
        }
        break;
    case "filtrar":
        let filtro = process.argv[3];

        let tareasFiltradas = funciones.filtrarPorEstado(filtro);

        if (filtro && tareasFiltradas.lenght != 0) { //Recorrerá la lista y retornará las que encuentre por el estado que le pasemos
            console.log(`Lista de tareas filtrada por: ${filtro}`);
            console.log("---------------------------------------")

            tareasFiltradas.forEach(tarea => {
                console.log(`Titulo: ${tarea.titulo} // ${tarea.estado}`);
            })
        } else if (filtro && tareasFiltradas.lenght == 0) {//Si ingresamos un estado y no hay tareas para ese estado
            console.log("No tenés tareas en ese estado");
        } else {
            console.log("Tenés que ingresar un estado para filtrar");
        }
        break;

    case undefined://indefinido no le pasamos ningun parametro en el indice 2
        console.log('Atención - Tienes que pasar una acción');
        break;
    default:
        console.log('No entiendo que quieres hacer')//O si le pasamos cualquier cosa en su indice 2
        break;
}