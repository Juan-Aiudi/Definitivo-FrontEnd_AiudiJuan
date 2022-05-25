package com.portfolio.jca.controlador;

import com.portfolio.jca.entidad.Educacion;
import com.portfolio.jca.interfaz.IEducacionServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController //Indicamos que es un controlador
public class EducacionController {
    @Autowired IEducacionServicio ieducacionservicio;
    
    //Con este get traigo de la DB al front
    @GetMapping("/educacion/lista")
    public List<Educacion> getEducacion(){
        //Devuelvo el método get del Servicio
        return ieducacionservicio.getEducacion();
    }
    
    //Con el post guardo desde el front en la DB
    @PostMapping("/educacion/crear")
    //Con el RequestBody le envío los datos al back desde el body
    public String crearEducacion(@RequestBody Educacion educacion){
        //Envío los datos con el método save creado en el Servicio
        ieducacionservicio.saveEducacion(educacion);
        return "Se creo correctamente la educación";
    }
    
    //Con el delete elimino desde el front a la DB por su ID como variable
    @DeleteMapping("/educacion/borrar/{id}")
    //Con el PathVariable le envío la variable ID a eliminar
    public String deleteEducacion(@PathVariable Long id){
        //Ejecuto el método delete creado en el Servicio
        ieducacionservicio.deleteEducacion(id);
        return "Se eliminó correctamente la educación";
    }
    
    //Si quiero modificar utilizo PutMapping por la variable ID 
    @PutMapping("/educacion/modificar/{id}")//Quedaría asi: URL:PUERTO/educacion/modificar/id/param&param&param&param
    public Educacion modificarEducacion(@PathVariable Long id,
                                        @RequestParam("tituloObtenidoEducacion") String nvoTitulo,
                                        @RequestParam("tiempoDemandadoEducacion") String nvoTiempo,
                                        @RequestParam("imagenEducacion") String nvoImagen,
                                        @RequestParam("descripcionEducacion") String nvoDescripcion){
        Educacion educacion = ieducacionservicio.finEducacion(id);
        
        educacion.setTituloObtenidoEducacion(nvoTitulo);
        educacion.setTiempoDemandadoEducacion(nvoTiempo);
        educacion.setImagenEducacion(nvoImagen);
        educacion.setDescripcionEducacion(nvoDescripcion);
        
        ieducacionservicio.saveEducacion(educacion);
        
        return educacion;
    }

}
