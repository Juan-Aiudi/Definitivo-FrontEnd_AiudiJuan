package com.portfolio.jca.interfaz;

import com.portfolio.jca.entidad.ExperienciaLaboral;
import java.util.List;


public interface IExperienciaLabServicio {
    //Traigo una lista de Experiencia Laboral
    public List<ExperienciaLaboral> getExperiencia();
    
    //Guardar una experiencia laboral
    public void saveExperiencia(ExperienciaLaboral experiencia);
    
    //Eliminar experiencia laboral
    public void deleteExperiencia(Long id);
    
    //Buscar una Experiencia Laboral por ID
    public ExperienciaLaboral finExperiencia(Long id);
}
