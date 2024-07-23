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
     static compararPaginas(libros,titulo1,titulo2){
        const libro1 = libros.find(libro => libro.titulo.toLowerCase()=== titulo1.toLowerCase() );
        const libro2 = libros.find(libro => libro.titulo.toLowerCase()=== titulo2.toLowerCase());
        if (!libro1 || !libro2) {
            document.write(`<p>Uno o ambos libros no se encontraron.</p>`);
            return;
        }
        if (libro1.numPaginas > libro2.numPaginas) {
            document.write(`<p>El libro ${libro1.titulo} tiene más páginas (${libro1.numPaginas}) que el libro ${libro2.titulo} (${libro2.numPaginas}).</p>`);
        } else if (libro1.numPaginas < libro2.numPaginas) {
            document.write(`<p>El libro ${libro2.titulo} tiene más páginas (${libro2.numPaginas}) que el libro ${libro1.titulo} (${libro1.numPaginas}).</p>`);
        } else {
            document.write(`<p>Ambos libros tienen el mismo número de páginas (${libro1.numPaginas}).</p>`);
        }
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
if (libros.length >= 2) {
    const titulo1 = prompt(`Ingrese el título del primer libro que quiere comparar:`);
    const titulo2 = prompt(`Ingrese el título del segundo libro que quiere comparar:`);
    Libro.compararPaginas(libros, titulo1, titulo2);
} else {
    document.write(`<p>Necesitas al menos dos libros para comparar.</p>`);
}