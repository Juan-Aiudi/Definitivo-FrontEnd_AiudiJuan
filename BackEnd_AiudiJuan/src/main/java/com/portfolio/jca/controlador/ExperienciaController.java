package com.portfolio.jca.controlador;

import com.portfolio.jca.entidad.ExperienciaLaboral;
import com.portfolio.jca.interfaz.IExperienciaLabServicio;
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
//@CrossOrigin(origins = "http://localhost:4200")//Le digo que acepte que sea llamado de la URL 4200
@CrossOrigin(origins = "https://proyectoargprogramaaiudijuan.web.app")
public class ExperienciaController {
    @Autowired IExperienciaLabServicio iexperienciaservicio;
    
    //Con este get traigo de la DB al front
    @GetMapping("/experiencia/lista")
    public List<ExperienciaLaboral> getExperiencia(){
        //Devuelvo el método get del Servicio
        return iexperienciaservicio.getExperiencia();
    }
    
    //Con el PostAuthorize autorizo que un determinado usuario pueda ejecutar esta acción
    @PostAuthorize("hasRole('ADMIN')")
    //Con el post guardo desde el front en la DB
    @PostMapping("/experiencia/crear")
    //Con el RequestBody le envío los datos al back desde el body
    public String crearExperiencia(@RequestBody ExperienciaLaboral experiencia){
        //Envío los datos con el método save creado en el Servicio
        iexperienciaservicio.saveExperiencia(experiencia);
        return "Se creo correctamente la experiencia";
    }
    
    //Con el PostAuthorize autorizo que un determinado usuario pueda ejecutar esta acción
    @PostAuthorize("hasRole('ADMIN')")
    //Con el delete elimino desde el front a la DB por su ID como variable
    @DeleteMapping("/experiencia/borrar/{id}")
    //Con el PathVariable le envío la variable ID a eliminar
    public String deleteExperiencia(@PathVariable Long id){
        //Ejecuto el método delete creado en el Servicio
        iexperienciaservicio.deleteExperiencia(id);
        return "Se eliminó correctamente la experiencia";
    }
    
    
    //Si quiero modificar utilizo PutMapping por la variable ID 
    @PutMapping("/experiencia/modificar/{id}")//Quedaría asi: URL:PUERTO/experiencia/modificar/id/param&param&param&param
    public ExperienciaLaboral modificarExperiencia(@PathVariable Long id,
                                        @RequestParam("lugarExpLab") String nvoLugar,
                                        @RequestParam("actualoAnterioryTiempoExpLab") String nvoActualoAnterior,
                                        @RequestParam("imagenExpLab") String nvoImagen,
                                        @RequestParam("descripcionExpLab") String nvoDescripcion){
        ExperienciaLaboral experiencia = iexperienciaservicio.finExperiencia(id);
        
        experiencia.setLugarExpLab(nvoLugar);
        experiencia.setActualoAnterioryTiempoExpLab(nvoActualoAnterior);
        experiencia.setImagenExpLab(nvoImagen);
        experiencia.setDescripcionExpLab(nvoDescripcion);
        
        iexperienciaservicio.saveExperiencia(experiencia);
        
        return experiencia;
    }
    
    @GetMapping("/experiencia/traer/experiencia/{id}")
    public ExperienciaLaboral finExperienciaLaboral(@PathVariable Long id){
        return iexperienciaservicio.finExperiencia(id);
    }
}
