package com.portfolio.jca.servicio;

import com.portfolio.jca.entidad.HabilidadesDuras;
import com.portfolio.jca.interfaz.IHabilidadesDurasServicio;
import com.portfolio.jca.repositorio.IHabilidadesDurasRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DesarrolloHabDurasService implements IHabilidadesDurasServicio{
    //Con el autowired realizo inyección de dependencia
    @Autowired IHabilidadesDurasRepositorio ihabdurasrepositorio;    

    @Override
    public List<HabilidadesDuras> getHabilidadesDuras() {
        List<HabilidadesDuras> habduras = ihabdurasrepositorio.findAll();
        return habduras;
    }

    @Override
    public void saveHabilidadesSuras(HabilidadesDuras habilidadesduras) {
        ihabdurasrepositorio.save(habilidadesduras);
    }

    @Override
    public void deleteHabilidadesDuras(Long id) {
        ihabdurasrepositorio.deleteById(id);
    }

    @Override
    public HabilidadesDuras finHabilidadesDuras(Long id) {
        HabilidadesDuras habduras = ihabdurasrepositorio.findById(id).orElse(null);
        return habduras;
    }
}
