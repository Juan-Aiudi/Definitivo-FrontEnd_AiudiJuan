package com.portfolio.jca.interfaz;

import com.portfolio.jca.entidad.HabilidadesDuras;
import java.util.List;


public interface IHabilidadesDurasServicio {
    //Traigo una lista de Habilidades Duras
    public List<HabilidadesDuras> getHabilidadesDuras();
    
    //Guardar una Habilidad Dura
    public void saveHabilidadesSuras(HabilidadesDuras habilidadesduras);
    
    //Eliminar Habilidad Dura
    public void deleteHabilidadesDuras(Long id);
    
    //Buscar una Habilidad Duras por ID
    public HabilidadesDuras finHabilidadesDuras(Long id);
}
