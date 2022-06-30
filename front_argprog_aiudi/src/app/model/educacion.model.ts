export class educacionModel{
    idEducacion: Number; //Con el símbolo ? le digo que este dato NO es necesario
    tituloObtenidoEducacion: String;
    tiempoDemandadoEducacion: String;
    imagenEducacion: String;
    descripcionEducacion: String;
    
    constructor(id: Number, titulo: String, tiempo: String, imagen: String, descripcion: String){
        this.idEducacion = id;
        this.tituloObtenidoEducacion = titulo;
        this.tiempoDemandadoEducacion = tiempo;
        this.imagenEducacion = imagen;
        this.descripcionEducacion = descripcion;
    }
}

//Ahora lo que tenemos que hacer es crear un SERVICIO que utilice este modelo
//Abrimos un terminal ng g s service/educacion