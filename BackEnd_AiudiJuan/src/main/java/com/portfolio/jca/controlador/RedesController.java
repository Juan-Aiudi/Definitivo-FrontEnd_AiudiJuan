package com.portfolio.jca.controlador;

import com.portfolio.jca.entidad.Redes;
import com.portfolio.jca.interfaz.IRedesServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController //Indicamos que es un controlador
@CrossOrigin(origins = "http://localhost:4200")//Le digo que acepte que sea llamado de la URL 4200
public class RedesController {
    @Autowired IRedesServicio iredesservicio;
    
    //Con este get traigo de la DB al front
    @GetMapping("/redes/lista")
    public List<Redes> getRedes(){
        //Devuelvo el método get del Servicio
        return iredesservicio.getRedes();
    }
    
    //Con el post guardo desde el front en la DB
    @PostMapping("/redes/crear")
    //Con el RequestBody le envío los datos al back desde el body
    public String crearProyectos(@RequestBody Redes redes){
        //Envío los datos con el método save creado en el Servicio
        iredesservicio.saveRedes(redes);
        return "Se creo correctamente una nueva red";
    }
    
    //Con el delete elimino desde el front a la DB por su ID como variable
    @DeleteMapping("/redes/borrar/{id}")
    //Con el PathVariable le envío la variable ID a eliminar
    public String deleteRedes(@PathVariable Long id){
        //Ejecuto el método delete creado en el Servicio
        iredesservicio.deleteRedes(id);
        return "Se eliminó correctamente la red";
    }
    
    //Si quiero modificar utilizo PutMapping por la variable ID 
    @PutMapping("/redes/modificar/{id}")//Quedaría asi: URL:PUERTO/redes/modificar/id/param&param&param
    public Redes modificarRed (@PathVariable Long id,
                               @RequestParam("nombreRed") String nvoNombre,
                               @RequestParam("linkRed") String nvoLink,
                               @RequestParam("imagenRed") String nvoImagen){
        Redes red = iredesservicio.finRedes(id);
        
        red.setNombreRed(nvoNombre);
        red.setLinkRed(nvoLink);
        red.setImagenRed(nvoImagen);
                
        iredesservicio.saveRedes(red);
        
        return red;
    }
    
    @GetMapping("/redes/traer/red/{id}")
    public Redes findRedes(@PathVariable Long id){
        return iredesservicio.finRedes(id);
    }
    
}
