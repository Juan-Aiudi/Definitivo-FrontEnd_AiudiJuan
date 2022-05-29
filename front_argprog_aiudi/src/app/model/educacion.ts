export class educacion{
    idEducacion?: number; //Con el símbolo ? le digo que este dato NO es necesario
    tituloObtenidoEducacion: String;
    tiempoDemandadoEducacion: String;
    imagenEducacion: String;
    descripcionEducacion: String;
    
    constructor(titulo: String, tiempo: String, imagen: String, descripcion: String){
        this.tituloObtenidoEducacion = titulo;
        this.tiempoDemandadoEducacion = tiempo;
        this.imagenEducacion = imagen;
        this.descripcionEducacion = descripcion;
    }
}

//Ahora lo que tenemos que hacer es crear un SERVICIO que utilice este modelo
//Abrimos un terminal ng g s service/educacion

//Este modelo de educación lo generé pero NO lo utilizo en ninguna parte. Lo puedo eliminar