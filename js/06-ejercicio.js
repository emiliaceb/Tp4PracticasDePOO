/* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas. */

class Libro{
    #ISBN;
    #titulo;
    #autor;
    #numPaginas;

    constructor(titulo,autor,numPaginas){
        this.#ISBN = this.generarISBN();
        this.#titulo = titulo;
        this.#autor = autor;
        this.#numPaginas = numPaginas
    }
    get ISBN(){
        return this.#ISBN;
    }
    set ISBN(correcionISBN){
        (correcionISBN >= 1000000000 && correcionISBN<= 9999999999999)? this.#ISBN = correcionISBN : alert(`El ISBN es invalido`);
    }
    get titulo(){
        return this.#titulo;
    }
    set titulo(correcionTitulo){
        this.#titulo = correcionTitulo;
    }
    get autor(){
        return this.#autor;
    }
    set autor(correcionAutor){
        this.#autor = correcionAutor;
    }
    get numPaginas(){
        return this.#numPaginas;
    }
    set numPaginas(modificacionNumPaginas){
        this.#numPaginas = modificacionNumPaginas;
    }
    generarISBN(){
        return Math.floor(Math.random()*9999999999999)+1000000000000;
    }
    mostrar(){
        document.write(`<p>El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene páginas ${this.numPaginas}</p>`);
    }
}
const libros = [];

do{
    let titulo= prompt(`Ingrese el Tiulo:`);
    let autor= prompt(`Ingrese el Autor:`);
    let numPaginas = parseInt(prompt(`Ingrese el numero de paginas:`))
    const libro = new Libro(titulo,autor,numPaginas);
    libros.push(libro);

}while(confirm(`¿Desea ingresar otro libro?`))
document.write(`<h1> Libros </h1>`);
for(const libro of libros){
    libro.mostrar();
}