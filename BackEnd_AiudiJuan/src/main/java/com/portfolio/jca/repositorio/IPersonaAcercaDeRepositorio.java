package com.portfolio.jca.repositorio;

import com.portfolio.jca.entidad.PersonaAcercaDe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaAcercaDeRepositorio extends JpaRepository<PersonaAcercaDe, Long> {
    //Para ver los métodos de JpaRepository mantengo presionado CTRL y hago un CLICK en JpaRepository
}
