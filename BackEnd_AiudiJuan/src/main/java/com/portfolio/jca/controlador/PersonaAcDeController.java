package com.portfolio.jca.controlador;

import com.portfolio.jca.entidad.PersonaAcercaDe;
import com.portfolio.jca.interfaz.IPersonaAcercaDeServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
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
@CrossOrigin(origins = "http://localhost:4200")  //Le digo que acepte que sea llamado de la URL 4200
public class PersonaAcDeController {
    @Autowired IPersonaAcercaDeServicio iadservicio;
    

    //Con este get traigo de la DB al front
    @GetMapping("/ad/lista")
    public List<PersonaAcercaDe> getAcDe(){
        //Devuelvo el método get del Servicio
        return iadservicio.getPersonaAcercaDe();
    }
    
    //Con el PostAuthorize autorizo que un determinado usuario pueda ejecutar esta acción
    @PostAuthorize("hasRole('ADMIN')")
    //Con el post guardo desde el front en la DB
    @PostMapping("/ad/crear")
    //Con el RequestBody le envío los datos al back desde el body
    public String crearAcDe(@RequestBody PersonaAcercaDe acde){
        //Envío los datos con el método save creado en el Servicio
        iadservicio.savePersonaAcercaDe(acde);
        return "Se creo correctamente la persona";
    }
    
    //Con el PostAuthorize autorizo que un determinado usuario pueda ejecutar esta acción
    @PostAuthorize("hasRole('ADMIN')")
    //Con el delete elimino desde el front a la DB por su ID como variable    
    @DeleteMapping("/ad/borrar/{id}")
    //Con el PathVariable le envío la variable ID a eliminar
    public String deleteAcDe(@PathVariable Long id){
        //Ejecuto el método delete creado en el Servicio
        iadservicio.deletePersonaAcercaDe(id);
        return "Se eliminó correctamente la persona";
    }
    
    
    //Si quiero modificar utilizo PutMapping por la variable ID    
    @PutMapping("/ad/modificar/{id}")//Quedaría asi: URL:PUERTO/ad/modificar/id?param&param&param&param&param    
    public PersonaAcercaDe modificarAcDe(@PathVariable Long id,
                                         @RequestParam("nombreAcercaDe") String nvoNombre,
                                         @RequestParam("apellidoAcercaDe") String nvoApellido,
                                         @RequestParam("tituloAcercaDe") String nvoTitulo,
                                         @RequestParam("imagenAcercaDe") String nvoImagen,
                                         @RequestParam("descripcionAcercaDe") String nvoDescripcion){
        PersonaAcercaDe acde = iadservicio.finPersonaAcercaDe(id);
        
        acde.setNombreAcercaDe(nvoNombre);
        acde.setApellidoAcercaDe(nvoApellido);
        acde.setTituloAcercaDe(nvoTitulo);
        acde.setImagenAcercaDe(nvoImagen);
        acde.setDescripcionAcercaDe(nvoDescripcion);
                        
        iadservicio.savePersonaAcercaDe(acde);
        
        return acde;
    }
    
    
    @GetMapping("/ad/traer/persona/{id}")
    public PersonaAcercaDe finAcercaDe(@PathVariable Long id){
        return iadservicio.finPersonaAcercaDe(id);
    }
    
}
