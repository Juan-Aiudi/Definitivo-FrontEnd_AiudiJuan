package com.portfolio.jca.interfaz;

import com.portfolio.jca.entidad.HabilidadesBlandas;
import java.util.List;


public interface IHabilidadesBlandasServicio {
    //Traigo una lista de Habilidades Blandas
    public List<HabilidadesBlandas> getHabilidadesBlandas();
    
    //Guardar una Habilidad Blanda
    public void saveHabilidadesBlandas(HabilidadesBlandas habilidadesblandas);
    
    //Eliminar Habilidad Blanda
    public void deleteHabilidadesBlandas(Long id);
    
    //Buscar una Habilidad Blanda por ID
    public HabilidadesBlandas finHabilidadesBlandas(Long id);
}
