export class habilidadesBlandasModel{
    idHabBlandas: Number; //Con el símbolo ? le digo que este dato NO es necesario
    porcentajeBlandas: Number;
    subtituloBlandas: String;
    sizeSubTituloBlandas: String;
    
    constructor(id: Number, porcentaje: Number, subtitulo: String, size: String){
        this.idHabBlandas = id;
        this.porcentajeBlandas = porcentaje;
        this.subtituloBlandas = subtitulo;
        this.sizeSubTituloBlandas = size;
    }
}