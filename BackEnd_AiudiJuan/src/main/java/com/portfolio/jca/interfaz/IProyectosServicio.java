package com.portfolio.jca.interfaz;

import com.portfolio.jca.entidad.Proyectos;
import java.util.List;


public interface IProyectosServicio {
    //Traigo una lista de Proyectos
    public List<Proyectos> getProyectos();
    
    //Guardar Proyectos
    public void saveProyectos(Proyectos proyectos);
    
    //Eliminar Proyectos
    public void deleteProyectos(Long id);
    
    //Buscar Proyectos por ID
    public Proyectos finProyectos(Long id);
}
