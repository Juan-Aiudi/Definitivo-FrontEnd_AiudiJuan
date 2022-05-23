package com.portfolio.jca.servicio;

import com.portfolio.jca.entidad.Redes;
import com.portfolio.jca.interfaz.IRedesServicio;
import com.portfolio.jca.repositorio.IRedesRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DesarrolloRedesService implements IRedesServicio{
    //Con el autowired realizo inyección de dependencia
    @Autowired IRedesRepositorio iredesrepositorio;

    @Override
    public List<Redes> getRedes() {
        List<Redes> redes = iredesrepositorio.findAll();
        return redes;
    }

    @Override
    public void saveRedes(Redes redes) {
        iredesrepositorio.save(redes);
    }

    @Override
    public void deleteRedes(Long id) {
        iredesrepositorio.deleteById(id);
    }

    @Override
    public Redes finRedes(Long id) {
        Redes redes = iredesrepositorio.findById(id).orElse(null);
        return redes;
    }
}
