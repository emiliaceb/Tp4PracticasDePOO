/* 7- Agenda telefónica de contactos.
atributos: nombre y un teléfono.
Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. 
Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt,
las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola. */

class Contacto{
    #nombre;
    #numero;
    constructor(nombre,numero){
        this.#nombre = nombre;
        this.#numero = numero;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }
    get numero(){
        return this.#numero;
    }
    set numero(nuevoNumero){
        this.#numero = nuevoNumero;
    }
    aniadirContacto(contacto){

    }
}
class Agenda{
    constructor(tamanio = 10){
        this.tamanio = tamanio;
        this.contactos = [];
    }
    aniadirContacto(contacto){
        if(this.contactos.length > this.tamanio){
            document.write(`Agenda llena (${this.tamanio}). No se pudo añadir el con tacto`)
        }
        if(this.contactos.find(c => c.nombre.toLowerCase() === contacto.nombre.toLowerCase())){
            alert(`El contacto ya existe`);
        }
        else{
            this.contactos.push(contacto);
            console.log(`Contacto ${contacto.nombre} añadido`);
        }
    }
    existeContacto(nombre){
       let existenciaContacto = this.contactos.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());
        (existenciaContacto)? alert(`El contacto ya existe`) : alert(`El contacto no existe`);
    }
    listarContactos(){
        document.write(`<h2>Contactos Agendados</h2>`)
        this.contactos.forEach(contacto => {
            document.write(`<p>Telefono de ${contacto.nombre} : ${contacto.numero}</p>`)
        })
    }
    buscarContacto(nombre){
        const existenciaContacto = this.contactos.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());
        if(existenciaContacto){
            document.write(`<h3>Contacto buscado</h3>`);
            document.write(`<p>Telefono de ${existenciaContacto.nombre} ${existenciaContacto.numero}</p>`);
        }else{
            document.write(`El contacto buscado ${nombre} no existe`);
        }
    }
    eliminarContacto(contacto){
        let index = this.contactos.findIndex(c => c.nombre.toLowerCase() === contacto.toLowerCase());
        if(index !== -1 ){
            this.contactos.splice(index,1);
            console.log(`contacto ${contacto} eliminado`)
            console.log(this.contactos);
            
        }else {
            alert(`Contacto ${contacto} no encontrado.`);
        }
    }
    agendaLlena(){
        if(this.tamanio === this.contactos.length){
            alert(`La agenda esta llena`)
        }else{
            alert(`Aun queda espacio en la agenda`);
        }
    }
    huecosLibres(){
        return this.tamanio - this.contactos.length;
    }
}
const agenda = new Agenda();
let opcion;
do{
    opcion = prompt(
        `Seleccione una opcion:
        1. Añadir contacto
        2. Verificar si un contacto existe
        3. Listar contactos
        4. Buscar contacto
        5. Eliminar contacto
        6. Verificar si la agenda está llena
        7. Verificar huecos libres
        8. Salir`
    )
    switch(opcion){
        case '1':
            let nombre = prompt(`Ingrese el nombre del contacto`);
            let numero = prompt(`Ingrese el numero del contacto`);
            const contacto = new Contacto(nombre,numero);
            agenda.aniadirContacto(contacto);
            break;
        case '2':
            nombre2 = prompt(`Ingrese el nombre del contacto`);
            agenda.existeContacto(nombre2);
            break;
        case '3':
            agenda.listarContactos();
            break;
        case '4':
            let nombre4 = prompt(`Ingrese el nombre`);
            agenda.buscarContacto(nombre4);
            break;
        case '5':
            let nombre5 = prompt(`Ingrese el nombre del contacto que desea eliminar`);
            agenda.eliminarContacto(nombre5);
            break;
        case '6':
            agenda.agendaLlena();
            break;
        case '7':
            document.write(`<p> Huecos libres en la agenda: ${agenda.huecosLibres()}</p>`);
            break;
        default:
            console.log("Opción no válida. Intente nuevamente.");
            break;
    }

}while(opcion!=='8');
