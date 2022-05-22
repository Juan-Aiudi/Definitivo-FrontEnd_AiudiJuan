package com.portfolio.jca.repositorio;

import com.portfolio.jca.entidad.ExperienciaLaboral;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IExperienciaLaboralRepositorio extends JpaRepository<ExperienciaLaboral, Long>{
    //Para ver los métodos de JpaRepository mantengo presionado CTRL y hago un CLICK en JpaRepository
    
}
