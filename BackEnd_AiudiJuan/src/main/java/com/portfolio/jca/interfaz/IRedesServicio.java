package com.portfolio.jca.interfaz;

import com.portfolio.jca.entidad.Redes;
import java.util.List;


public interface IRedesServicio {
    //Traigo una lista de Redes
    public List<Redes> getRedes();
    
    //Guardar Redes
    public void saveRedes(Redes redes);
    
    //Eliminar Redes
    public void deleteRedes(Long id);
    
    //Buscar Redes por ID
    public Redes finRedes(Long id);
}
