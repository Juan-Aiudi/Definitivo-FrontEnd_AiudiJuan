package com.portfolio.jca.repositorio;

import com.portfolio.jca.entidad.Redes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRedesRepositorio extends JpaRepository<Redes, Long>{
    //Para ver los métodos de JpaRepository mantengo presionado CTRL y hago un CLICK en JpaRepository
    
}
