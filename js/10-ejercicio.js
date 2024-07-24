/* 10- Clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones,
 método: agregarAvion, el cual recibirá un objeto de tipo Avión, 
 buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo,si no lo encontró indicar con un mensaje.

 Los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. 
Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible 
en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", 
crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto,
 buscar un avión y usar el método abordar.*/

 class Aeropuerto{
    #nombreAeropuerto;
    #aviones;
    constructor(nombreAeropuerto){
        this.#nombreAeropuerto = nombreAeropuerto;
        this.#aviones = [];
    }
    get nombreAeropuerto(){
        return this.#nombreAeropuerto;
    }
    set nombreAeropuerto(nombreModificado){
        this.#nombreAeropuerto = nombreModificado;
    }
    get aviones(){
        return this.aviones;
    }
    
    agregarAvion(avion){
        this.#aviones.push(avion);
        console.log(`Avion agregado correctamente.`)
    }
    buscarAvion(nombre){
        let existeAvion = this.#aviones.find(a => a.nombre.toLowerCase() === nombre.toLowerCase());
        if(existeAvion){
            alert(`Si se encontro el ${existeAvion.nombre} en el aeropuerto ${this.#nombreAeropuerto}. El mismo tiene destino hacia ${existeAvion.destino} y una capacidad de ${existeAvion.capacidad}`);
        }else{
            alert(`Lo sentimos. No se encontro el avion en el aeropuerto ${this.#nombreAeropuerto}`)
        }
    }
 }
 class Avion{
    #nombre;
    #capacidad;
    #destino;
    #pasajeros;
    constructor(nombre,capacidad,destino){
        this.#nombre = nombre;
        this.#capacidad = capacidad;
        this.#destino = destino;
        this.#pasajeros = [];
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }
    get capacidad(){
        return this.#capacidad;
    }
    set capacidad(nuevaCapacidad){
        this.#capacidad = nuevaCapacidad;
    }
    get destino(){
        return this.#destino;
    }
    set destino(nuevoDestino){
        this.#destino = nuevoDestino;
    }
    get pasajeros(){
        return this.#pasajeros;
    }
    
    abordar(pasajero){
        if(this.pasajeros.length < this.capacidad){
            this.#pasajeros.push(pasajero);
            document.write(`<p>El pasajero ${pasajero.nombrePasajero} abordo el avion 🛩️👋</p>`)
        } else {
            alert(`El avión ${this.#nombre} está lleno.`);
        }
    }
 }
 class Pasajero{
    #nombrePasajero;
    constructor(nombrePasajero){
        this.#nombrePasajero = nombrePasajero;
    }
    get nombrePasajero(){
        return this.#nombrePasajero;
    }
    set nombrePasajero(nombreCorregidoPasajero){
        this.#nombrePasajero = nombreCorregidoPasajero;
    }
 }
 
 const aeropuerto = new Aeropuerto ('Aeropuerto Internacional');
 const avion1 = new Avion('AiresFrescos',150,'Cordillera de los Andes');
 const avion2 = new Avion(`Vuelo Feliz`,300,'Cancun');
 const avion3 = new Avion(`Rapido cuchau`,200,'Singapur');

 aeropuerto.agregarAvion(avion1);
 aeropuerto.agregarAvion(avion2);
 aeropuerto.agregarAvion(avion3);
 console.log(aeropuerto);

 const pasajero = new Pasajero('Emilia');
aeropuerto.buscarAvion('Vuelo Feliz');
avion2.abordar(pasajero);

