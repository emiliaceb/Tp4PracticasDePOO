/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción,
 ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta. */
 
 const cuenta = {
    titular: 'Alex',
    saldo: 0,

    ingresar: function(cantidad){
        cuenta.saldo += cantidad;
        document.write(`<p> Has ingresado ${cantidad}</p>`);
    },
    extraer: function(cantidad){
        if(cantidad<=cuenta.saldo){
            cuenta.saldo -= cantidad;
            document.write(`<p> Se ha extraido ${cantidad}</p>`);
        }else{
            document.write(`<p> No tiene saldo suficiente para realizar la extraccion </p>`);
        }
    },
    informar: function(){
        document.write(`<p> saldo: ${cuenta.saldo}</p>`)
    }
 }
 document.write(`<h1> CUENTA USUARIO: ${cuenta.titular}</h1>`);
 document.write(`Estado de cuenta ${cuenta.saldo}`);
 cuenta.ingresar(700);
 cuenta.extraer(500);
 cuenta.informar();

 
