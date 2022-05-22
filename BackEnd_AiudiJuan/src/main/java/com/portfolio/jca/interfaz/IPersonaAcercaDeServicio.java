package com.portfolio.jca.interfaz;

import com.portfolio.jca.entidad.PersonaAcercaDe;
import java.util.List;


public interface IPersonaAcercaDeServicio {
    //Traigo una lista de PersonaAcercaDe
    public List<PersonaAcercaDe> getPersonaAcercaDe();
    
    //Guardar PersonaAcercaDe
    public void savePersonaAcercaDe(PersonaAcercaDe personaacercade);
    
    //Eliminar PersonaAcercaDe
    public void deletePersonaAcercaDe(Long id);
    
    //Buscar PersonaAcercaDe por ID
    public PersonaAcercaDe finPersonaAcercaDe(Long id);
}
