package com.portfolio.jca.repositorio;

import com.portfolio.jca.entidad.Proyectos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProyectosRepositorio extends JpaRepository<Proyectos, Long> {
    //Para ver los métodos de JpaRepository mantengo presionado CTRL y hago un CLICK en JpaRepository

}
