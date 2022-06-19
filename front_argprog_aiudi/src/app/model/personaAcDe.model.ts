export class personaAcDe{
    idAcercaDe?: String; //Con el símbolo ? le digo que este dato NO es necesario
    nombreAcercaDe: String;
    apellidoAcercaDe: String;
    tituloAcercaDe: String;
    imagenAcercaDe: String;
    descripcionAcercaDe: String;

    constructor(id: String, nombre: String, apellido: String, titulo: String, imagen: String, descripcion: String){
        this.idAcercaDe = id;
        this.nombreAcercaDe = nombre;
        this.apellidoAcercaDe = apellido;
        this.tituloAcercaDe = titulo;
        this.imagenAcercaDe = imagen;
        this.descripcionAcercaDe = descripcion;
    }
}

//Ahora lo que tenemos que hacer es crear un SERVICIO que utilice este modelo
//Abrimos un terminal ng g s service/personaAcDe