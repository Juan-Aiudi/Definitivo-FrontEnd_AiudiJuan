package com.portfolio.jca.servicio;

import com.portfolio.jca.entidad.PersonaAcercaDe;
import com.portfolio.jca.interfaz.IPersonaAcercaDeServicio;
import com.portfolio.jca.repositorio.IPersonaAcercaDeRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DesarrolloPersonaAcercaDeService implements IPersonaAcercaDeServicio{
    //Con el autowired realizo inyección de dependencia
    @Autowired IPersonaAcercaDeRepositorio ipersonaAcercaderepositorio;

    @Override
    public List<PersonaAcercaDe> getPersonaAcercaDe() {
        List<PersonaAcercaDe> personaacercade = ipersonaAcercaderepositorio.findAll();
        return personaacercade;
    }

    @Override
    public void savePersonaAcercaDe(PersonaAcercaDe personaacercade) {
        ipersonaAcercaderepositorio.save(personaacercade);
    }

    @Override
    public void deletePersonaAcercaDe(Long id) {
        ipersonaAcercaderepositorio.deleteById(id);
    }

    @Override
    public PersonaAcercaDe finPersonaAcercaDe(Long id) {
        PersonaAcercaDe personaacercade = ipersonaAcercaderepositorio.findById(id).orElse(null);
        return personaacercade;
    }
}
