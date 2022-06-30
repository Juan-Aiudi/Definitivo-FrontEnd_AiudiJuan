export class redesModel{
    idRed: Number; //Con el símbolo ? le digo que este dato NO es necesario
    nombreRed: String;
    linkRed: String;
    imagenRed: String;
    
    constructor(id: Number, nombre: String, link: String, imagen: String){
        this.idRed = id;
        this.nombreRed = nombre;
        this.linkRed = link;
        this.imagenRed = imagen;
    }
}