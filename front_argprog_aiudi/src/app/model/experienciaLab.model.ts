export class experienciaLabModel{
    idExpLab: Number; //Con el símbolo ? le digo que este dato NO es necesario
    lugarExpLab: String;
    actualoAnterioryTiempoExpLab: String;
    imagenExpLab: String;
    descripcionExpLab: String;
    
    constructor(id: Number, lugar: String, tiempo: String, imagen: String, descripcion: String){
        this.idExpLab = id;
        this.lugarExpLab = lugar;
        this.actualoAnterioryTiempoExpLab = tiempo;
        this.imagenExpLab = imagen;
        this.descripcionExpLab = descripcion;
    }
}

//Ahora lo que tenemos que hacer es crear un SERVICIO que utilice este modelo
//Abrimos un terminal ng g s service/experiencialab