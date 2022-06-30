export class habilidadesDurasModel{
    idHabDuras: Number; //Con el símbolo ? le digo que este dato NO es necesario
    porcentajeDuras: Number;
    subtituloDuras: String;
    sizeSubTituloDuras: String;
    
    constructor(id: Number, porcentaje: Number, subtitulo: String, size: String){
        this.idHabDuras = id;
        this.porcentajeDuras = porcentaje;
        this.subtituloDuras = subtitulo;
        this.sizeSubTituloDuras = size;
    }
}