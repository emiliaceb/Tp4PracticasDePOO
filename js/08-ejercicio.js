/* 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión",
 y los métodos "saludar" y "despedirse".
  Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades 
  y llama a sus métodos "saludar" y "despedirse". */
  class Persona{
    #nombre;
    #edad;
    #profesion;
    constructor(nombre,edad,profesion){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#profesion = profesion;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nombreActualizado){
        this.#nombre = nombreActualizado;
    }
    get edad(){
        return this.#edad;
    }
    set edad(edadActualizada){
        this.#edad = edadActualizada;
    }
    get profesion(){
        return this.#profesion;
    }
    set profesion(cambioProfesion){
        this.#profesion = cambioProfesion;
    }
    saludar(){
        document.write(`<p> ${this.nombre} : Hola!! 👋👋</p>`);
    }
    despedirse(){
        document.write(`<p> ${this.nombre} : Nos vemos!! 👋👋</p>`);
    }
  }
   const persona = new Persona('emilia',22,'estudiante');
   const persona2 = new Persona('joaquin',15,'estudiante');
   persona.saludar();
   persona2.despedirse();

