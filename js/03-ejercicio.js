/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, mas los métodos necesarios para modificar y
 mostrar sus propiedades, calcular el perímetro y el área */

 class Rectangulo{
    #alto
    #ancho
    constructor(alto,ancho){
        this.#alto = alto;
        this.#ancho = ancho;
    }
    get alto(){
        return this.#alto;
    }
    set alto(nuevaAltura){
        this.#alto = nuevaAltura;
    }
    get ancho(){
        return this.#ancho;
    }
    set ancho(nuevoAncho){
        this.#ancho = nuevoAncho;
    }
    calcularPerimetro(){
        let perimetro = this.alto*2 + this.ancho*2;
        document.write(`<p> El perimetro del triangulo es ${perimetro}</p>`);
    }
    calcularArea() {
        let area = this.#alto * this.#ancho;
        document.write(`<p>El área del rectángulo es ${area}</p>`);
    }
 }

 const rectangulo = new Rectangulo();
 rectangulo.alto = parseInt(prompt(` Ingrese el alto del Rectangulo`));
 rectangulo.ancho = parseInt(prompt(`Ingrese el ancho del Rectangulo`));
 rectangulo.calcularArea();
 rectangulo.calcularPerimetro();

