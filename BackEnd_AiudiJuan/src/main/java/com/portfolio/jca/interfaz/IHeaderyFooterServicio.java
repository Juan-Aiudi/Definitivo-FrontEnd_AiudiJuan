package com.portfolio.jca.interfaz;

import com.portfolio.jca.entidad.HeaderyFooter;
import java.util.List;


public interface IHeaderyFooterServicio {
    //Traigo una lista de HeaderyFooter
    public List<HeaderyFooter> getHeaderyFooter();
    
    //Guardar HeaderyFooter
    public void saveHeaderyFooter(HeaderyFooter headeryfooter);
    
    //Eliminar HeaderyFooter
    public void deleteHeaderyFooter(Long id);
    
    //Buscar HeaderyFooter por ID
    public HeaderyFooter finHeaderyFooter(Long id);
}
