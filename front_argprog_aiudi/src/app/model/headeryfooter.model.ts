export class headeryfooterModel{
    idHeaderFooter: String; //Con el símbolo ? le digo que este dato NO es necesario
    imagenHeaderFooter: String;
    nombreHeaderFooter: String;
    fechaHeaderFooter: String;
    ciudadHeaderFooter: String;
    provinciaHeaderFooter: String;
    paisHeaderFooter: String;
    imagenBotonEditar: String;
    imagenBotonCerrar: String;
    imagenBotonEliminar: String;
    imagenBanner: String;
    
    constructor(id: String, imagenheader: String, nombreheader: String, fechafooter: String, ciudadfooter: String, provinciafooter: String, paisfooter: String, imagenbuttoneditar: String, imagenbuttoncerrar: String, imagenbuttoneliminar: String, imagenbanner: String){
        this.idHeaderFooter = id;
        this.imagenHeaderFooter = imagenheader;
        this.nombreHeaderFooter = nombreheader;
        this.fechaHeaderFooter = fechafooter;
        this.ciudadHeaderFooter = ciudadfooter;
        this.provinciaHeaderFooter = provinciafooter;
        this.paisHeaderFooter = paisfooter;
        this.imagenBotonEditar = imagenbuttoneditar;
        this.imagenBotonCerrar = imagenbuttoncerrar;
        this.imagenBotonEliminar = imagenbuttoneliminar;
        this.imagenBanner = imagenbanner
    }
}

//Ahora lo que tenemos que hacer es crear un SERVICIO que utilice este modelo
//Abrimos un terminal ng g s service/headeryfooter