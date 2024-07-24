/*4- Escribe una clase Producto para crear objetos.
Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos,
el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados*/

class Producto{
    #codigo;
    #nombre;
    #precio;
    
    constructor(codigo,nombre,precio){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#precio = precio;
    }
    get codigo(){
        return this.#codigo;
    }
    set codigo(nuevoCodigo){
        this.#codigo = nuevoCodigo;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }
    get precio(){
        return this.#precio;
    }
    imprimirDatos(){
        document.write(`<ul>
            <li> Codigo: ${this.codigo}</li>
            <li> Nombre: ${this.nombre}</li>
            <li> Precio: $${this.precio}</li>
            </ul>`)
    }
}
const cargarProductos= () => {
    for(let i=1; i<4; i++){
        let codigo = prompt(`Ingrese el codigo del producto ${i}`);
        let nombre = prompt(`Ingrese el nombre del producto ${i}`);
        let precio = prompt(`Ingrese el precio del producto ${i}`);

        const producto = new Producto(codigo,nombre,precio);
        productos.push(producto);
        
    }   

};
const productos = [];
cargarProductos();
document.write(`<h1> Lista de productos: </h1>`)
for (const producto of productos){
    producto.imprimirDatos();
}
