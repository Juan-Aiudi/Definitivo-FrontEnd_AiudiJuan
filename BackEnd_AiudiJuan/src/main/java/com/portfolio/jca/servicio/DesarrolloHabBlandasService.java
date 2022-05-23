package com.portfolio.jca.servicio;

import com.portfolio.jca.entidad.HabilidadesBlandas;
import com.portfolio.jca.interfaz.IHabilidadesBlandasServicio;
import com.portfolio.jca.repositorio.IHabilidadesBlandasRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DesarrolloHabBlandasService implements IHabilidadesBlandasServicio{
    //Con el autowired realizo inyección de dependencia
    @Autowired IHabilidadesBlandasRepositorio ihabblandasrepositorio;

    @Override
    public List<HabilidadesBlandas> getHabilidadesBlandas() {
        List<HabilidadesBlandas> habblandas = ihabblandasrepositorio.findAll();
        return habblandas;
    }

    @Override
    public void saveHabilidadesBlandas(HabilidadesBlandas habilidadesblandas) {
        ihabblandasrepositorio.save(habilidadesblandas);
    }

    @Override
    public void deleteHabilidadesBlandas(Long id) {
        ihabblandasrepositorio.deleteById(id);
    }

    @Override
    public HabilidadesBlandas finHabilidadesBlandas(Long id) {
        HabilidadesBlandas habblandas = ihabblandasrepositorio.findById(id).orElse(null);
        return habblandas;
    }
    
}
