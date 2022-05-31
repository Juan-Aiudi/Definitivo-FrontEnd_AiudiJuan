export class proyectoModel{
    idEducacion?: number; //Con el símbolo ? le digo que este dato NO es necesario
    nombreDelProyecto: String;
    imagenProyecto: String;
    descripcionProyecto: String;
    
    constructor(nombre: String, imagen: String, descripcion: String){
        this.nombreDelProyecto = nombre;
        this.imagenProyecto = imagen;
        this.descripcionProyecto = descripcion;
    }
}

//Ahora lo que tenemos que hacer es crear un SERVICIO que utilice este modelo
//Abrimos un terminal ng g s service/proyecto