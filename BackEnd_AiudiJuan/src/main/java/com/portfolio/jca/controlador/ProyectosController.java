package com.portfolio.jca.controlador;

import com.portfolio.jca.entidad.Proyectos;
import com.portfolio.jca.interfaz.IProyectosServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
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
public class ProyectosController {
    @Autowired IProyectosServicio iproyectosservicio;
    
    //Con este get traigo de la DB al front
    @GetMapping("/proyectos/lista")
    public List<Proyectos> getProyectos(){
        //Devuelvo el método get del Servicio
        return iproyectosservicio.getProyectos();
    }
    
    //Con el PostAuthorize autorizo que un determinado usuario pueda ejecutar esta acción
    @PostAuthorize("hasRole('ADMIN')")
    //Con el post guardo desde el front en la DB
    @PostMapping("/proyectos/crear")
    //Con el RequestBody le envío los datos al back desde el body
    public String crearProyectos(@RequestBody Proyectos proyecto){
        //Envío los datos con el método save creado en el Servicio
        iproyectosservicio.saveProyectos(proyecto);
        return "Se creo correctamente el proyecto";
    }
    
    //Con el PostAuthorize autorizo que un determinado usuario pueda ejecutar esta acción
    @PostAuthorize("hasRole('ADMIN')")
    //Con el delete elimino desde el front a la DB por su ID como variable
    @DeleteMapping("/proyectos/borrar/{id}")
    //Con el PathVariable le envío la variable ID a eliminar
    public String deleteProyectos(@PathVariable Long id){
        //Ejecuto el método delete creado en el Servicio
        iproyectosservicio.deleteProyectos(id);
        return "Se eliminó correctamente el proyecto";
    }
    
    
    //Si quiero modificar utilizo PutMapping por la variable ID 
    @PutMapping("/proyectos/modificar/{id}")//Quedaría asi: URL:PUERTO/proyectos/modificar/id/param&param&param
    public Proyectos modificarProyecto (@PathVariable Long id,
                                        @RequestParam("nombreDelProyecto") String nvoNombre,
                                        @RequestParam("imagenProyecto") String nvoImagen,
                                        @RequestParam("descripcionProyecto") String nvoDescripcion){
        Proyectos proyecto = iproyectosservicio.finProyectos(id);
        
        proyecto.setNombreDelProyecto(nvoNombre);
        proyecto.setImagenProyecto(nvoImagen);
        proyecto.setDescripcionProyecto(nvoDescripcion);
                
        iproyectosservicio.saveProyectos(proyecto);
        
        return proyecto;
    }
    
    @GetMapping("/proyectos/traer/proyecto/{id}")
    public Proyectos findProyecto(@PathVariable Long id){
        return iproyectosservicio.finProyectos(id);
    }
    
}
