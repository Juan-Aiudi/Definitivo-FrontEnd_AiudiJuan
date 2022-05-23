package com.portfolio.jca.servicio;

import com.portfolio.jca.entidad.ExperienciaLaboral;
import com.portfolio.jca.interfaz.IExperienciaLabServicio;
import com.portfolio.jca.repositorio.IExperienciaLaboralRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DesarrolloExpLabService implements IExperienciaLabServicio{
    //Con el autowired realizo inyección de dependencia
    @Autowired IExperienciaLaboralRepositorio iexperiencialaboralrepositorio;

    @Override
    public List<ExperienciaLaboral> getExperiencia() {
        List<ExperienciaLaboral> experiencia = iexperiencialaboralrepositorio.findAll();
        return experiencia;
    }

    @Override
    public void saveExperiencia(ExperienciaLaboral experiencia) {
        iexperiencialaboralrepositorio.save(experiencia);
    }

    @Override
    public void deleteExperiencia(Long id) {
        iexperiencialaboralrepositorio.deleteById(id);
    }

    @Override
    public ExperienciaLaboral finExperiencia(Long id) {
        ExperienciaLaboral experienciaLaboral = iexperiencialaboralrepositorio.findById(id).orElse(null);
        return experienciaLaboral;
    }
    
}
