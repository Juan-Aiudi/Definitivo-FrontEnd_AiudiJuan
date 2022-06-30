export class proyectoModel{
    idProyectos: Number; //Con el símbolo ? le digo que este dato NO es necesario
    nombreDelProyecto: String;
    imagenProyecto: String;
    descripcionProyecto: String;
    
    constructor(id: Number, nombre: String, imagen: String, descripcion: String){
        this.idProyectos = id;
        this.nombreDelProyecto = nombre;
        this.imagenProyecto = imagen;
        this.descripcionProyecto = descripcion;
    }
}

//Ahora lo que tenemos que hacer es crear un SERVICIO que utilice este modelo
//Abrimos un terminal ng g s service/proyecto