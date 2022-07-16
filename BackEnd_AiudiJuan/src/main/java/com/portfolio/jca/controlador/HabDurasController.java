package com.portfolio.jca.controlador;

import com.portfolio.jca.entidad.HabilidadesDuras;
import com.portfolio.jca.interfaz.IHabilidadesDurasServicio;
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
public class HabDurasController {
    @Autowired IHabilidadesDurasServicio ihabdurasservicio;
    
    //Con este get traigo de la DB al front
    @GetMapping("/habduras/lista")
    public List<HabilidadesDuras> getHabDuras(){
        //Devuelvo el método get del Servicio
        return ihabdurasservicio.getHabilidadesDuras();
    }
    
    //Con el PostAuthorize autorizo que un determinado usuario pueda ejecutar esta acción
    @PostAuthorize("hasRole('ADMIN')")
    //Con el post guardo desde el front en la DB
    @PostMapping("/habduras/crear")
    //Con el RequestBody le envío los datos al back desde el body
    public String crearHabDuras(@RequestBody HabilidadesDuras habilidades){
        //Envío los datos con el método save creado en el Servicio
        ihabdurasservicio.saveHabilidadesSuras(habilidades);
        return "Se creo correctamente la habilidad";
    }
    
    //Con el PostAuthorize autorizo que un determinado usuario pueda ejecutar esta acción
    @PostAuthorize("hasRole('ADMIN')")
    //Con el delete elimino desde el front a la DB por su ID como variable
    @DeleteMapping("/habduras/borrar/{id}")
    //Con el PathVariable le envío la variable ID a eliminar
    public String deleteHabDuras(@PathVariable Long id){
        //Ejecuto el método delete creado en el Servicio
        ihabdurasservicio.deleteHabilidadesDuras(id);
        return "Se eliminó correctamente la habilidad";
    }
    
    
    //Si quiero modificar utilizo PutMapping por la variable ID 
    @PutMapping("/habduras/modificar/{id}")//Quedaría asi: URL:PUERTO/habduras/modificar/id/param&param&param
    public HabilidadesDuras modificarHabDuras(@PathVariable Long id,
                                        @RequestParam("porcentajeDuras") int nvoPorcentaje,
                                        @RequestParam("subtituloDuras") String nvoSubTitulo,
                                        @RequestParam("sizeSubTituloDuras") String nvoTamanio){
        HabilidadesDuras habilidades = ihabdurasservicio.finHabilidadesDuras(id);
        
        habilidades.setPorcentajeDuras(nvoPorcentaje);
        habilidades.setSubtituloDuras(nvoSubTitulo);
        habilidades.setSizeSubTituloDuras(nvoTamanio);
                
        ihabdurasservicio.saveHabilidadesSuras(habilidades);
        
        return habilidades;
    }
    
    @GetMapping("/habduras/traer/habilidad/{id}")
    public HabilidadesDuras findDuras(@PathVariable Long id){
        return ihabdurasservicio.finHabilidadesDuras(id);
    }
}
