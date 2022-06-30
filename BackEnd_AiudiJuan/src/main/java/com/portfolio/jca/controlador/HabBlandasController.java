package com.portfolio.jca.controlador;

import com.portfolio.jca.entidad.HabilidadesBlandas;
import com.portfolio.jca.interfaz.IHabilidadesBlandasServicio;
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
public class HabBlandasController {
    @Autowired IHabilidadesBlandasServicio ihabblandasservicio;
    
    //Con este get traigo de la DB al front
    @GetMapping("/habblandas/lista")
    public List<HabilidadesBlandas> getHabBlandas(){
        //Devuelvo el método get del Servicio
        return ihabblandasservicio.getHabilidadesBlandas();
    }
    
    //Con el post guardo desde el front en la DB
    @PostMapping("/habblandas/crear")
    //Con el RequestBody le envío los datos al back desde el body
    public String crearHabBlandas(@RequestBody HabilidadesBlandas habilidades){
        //Envío los datos con el método save creado en el Servicio
        ihabblandasservicio.saveHabilidadesBlandas(habilidades);
        return "Se creo correctamente la habilidad";
    }
    
    //Con el delete elimino desde el front a la DB por su ID como variable
    @DeleteMapping("/habblandas/borrar/{id}")
    //Con el PathVariable le envío la variable ID a eliminar
    public String deleteHabBlandas(@PathVariable Long id){
        //Ejecuto el método delete creado en el Servicio
        ihabblandasservicio.deleteHabilidadesBlandas(id);
        return "Se eliminó correctamente la habilidad";
    }
    
    //Si quiero modificar utilizo PutMapping por la variable ID 
    @PutMapping("/habblandas/modificar/{id}")//Quedaría asi: URL:PUERTO/habblandas/modificar/id/param&param&param
    public HabilidadesBlandas modificarHabBlandas(@PathVariable Long id,
                                        @RequestParam("porcentajeBlandas") int nvoPorcentaje,
                                        @RequestParam("subtituloBlandas") String nvoSubTitulo,
                                        @RequestParam("sizeSubTituloBlandas") String nvoTamanio){
        HabilidadesBlandas habilidades = ihabblandasservicio.finHabilidadesBlandas(id);
        
        habilidades.setPorcentajeBlandas(nvoPorcentaje);
        habilidades.setSubtituloBlandas(nvoSubTitulo);
        habilidades.setSizeSubTituloBlandas(nvoTamanio);
                
        ihabblandasservicio.saveHabilidadesBlandas(habilidades);
        
        return habilidades;
    }
    
    @GetMapping("/habblandas/traer/habilidad/{id}")
    public HabilidadesBlandas findBlandas(@PathVariable Long id){
        return ihabblandasservicio.finHabilidadesBlandas(id);
    }
}
