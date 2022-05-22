package com.portfolio.jca.interfaz;

import com.portfolio.jca.entidad.Educacion;
import java.util.List;


public interface IEducacionServicio {
    //Traigo una lista de Educación
    public List<Educacion> getEducacion();
    
    //Guardar una educación
    public void saveEducacion(Educacion educacion);
    
    //Eliminar educación
    public void deleteEducacion(Long id);
    
    //Buscar una Educación por ID
    public Educacion finEducacion(Long id);
    
}
