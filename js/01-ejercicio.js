/*  1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo
 y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.*/

 const auto = {
    marca :'Fiat' ,
    modelo:'CRONOS' ,
    año: '2019',
    color:'Rojo' ,

    encender: function(){
        document.write(`<p> Auto ENCENDIDO </p>`);
    },
    apagar: function(){
        document.write(`<p> Auto APAGADO </p>`);
    }
 }
 document.write(`<h1> VEHICULO: </h1>`);
 document.write(`<h2> ${auto.marca} ${auto.modelo} ${auto.año} ${auto.color} </h2> `)
 auto.encender();
 auto.apagar();


