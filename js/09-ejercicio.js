/* 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad",
 y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" 
 y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y
  otro de la clase "Gato", 
  y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. */

  class Animal{
    #nombre;
    #edad;
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nombreCorregido){
        this.#nombre = nombreCorregido;
    }
    get edad(){
        return this.#edad;
    }
    set edad(edadActualizada){
        this.#edad = edadActualizada;
    }
    emitirSonido(){
    }
  }
  class Perro extends Animal{
    constructor(nombre,edad){
        super(nombre,edad);
    }
    emitirSonido(){
        document.write(`<p>Soy un gatito llamado ${this.nombre} y digo guau guau 🐶</p>`)
    }
  }
  class Gato extends Animal{
    constructor(nombre,edad){
        super(nombre,edad);
    }
    emitirSonido(){
        document.write(`<p>Soy un perrito llamado ${this.nombre} y digo miauuuuuuu 🐈</p>`);
    }
  }
  const gato = new Gato('Nube',2);
  gato.emitirSonido();
  const perro = new Perro('Balu',5);
  perro.emitirSonido();

