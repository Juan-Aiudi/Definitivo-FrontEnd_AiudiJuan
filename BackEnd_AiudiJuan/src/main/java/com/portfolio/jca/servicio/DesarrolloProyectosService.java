package com.portfolio.jca.servicio;

import com.portfolio.jca.entidad.Proyectos;
import com.portfolio.jca.interfaz.IProyectosServicio;
import com.portfolio.jca.repositorio.IProyectosRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DesarrolloProyectosService implements IProyectosServicio{
    //Con el autowired realizo inyección de dependencia
    @Autowired IProyectosRepositorio iproyectosrepositorio;

    @Override
    public List<Proyectos> getProyectos() {
        List<Proyectos> proyectos = iproyectosrepositorio.findAll();
        return proyectos;
    }

    @Override
    public void saveProyectos(Proyectos proyectos) {
        iproyectosrepositorio.save(proyectos);
    }

    @Override
    public void deleteProyectos(Long id) {
        iproyectosrepositorio.deleteById(id);
    }

    @Override
    public Proyectos finProyectos(Long id) {
        Proyectos proyectos = iproyectosrepositorio.findById(id).orElse(null);
        return proyectos;
    }
}
