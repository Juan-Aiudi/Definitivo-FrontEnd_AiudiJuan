package com.portfolio.jca.servicio;

import com.portfolio.jca.entidad.Educacion;
import com.portfolio.jca.interfaz.IEducacionServicio;
import com.portfolio.jca.repositorio.IEducacionRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DesarrolloEducacionService implements IEducacionServicio {
    //Con el autowired realizo inyección de dependencia
    @Autowired IEducacionRepositorio ieducacionrepositorio;
    
    @Override
    public List<Educacion> getEducacion() {
        List<Educacion> educacion = ieducacionrepositorio.findAll();
        return educacion;
    }

    @Override
    public void saveEducacion(Educacion educacion) {
        ieducacionrepositorio.save(educacion);
    }

    @Override
    public void deleteEducacion(Long id) {
        ieducacionrepositorio.deleteById(id);
    }

    @Override
    public Educacion finEducacion(Long id) {
        Educacion educacion = ieducacionrepositorio.findById(id).orElse(null);
        return educacion;
    }
    
}
