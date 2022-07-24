package com.portfolio.jca.controlador;

import com.portfolio.jca.entidad.HeaderyFooter;
import com.portfolio.jca.interfaz.IHeaderyFooterServicio;
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
public class HyFController {
    @Autowired IHeaderyFooterServicio ihyfservicio;
    
    //Con este get traigo de la DB al front
    @GetMapping("/hyf/lista")
    public List<HeaderyFooter> getHyF(){
        //Devuelvo el método get del Servicio
        return ihyfservicio.getHeaderyFooter();
    }
    
    //Con el PostAuthorize autorizo que un determinado usuario pueda ejecutar esta acción
    @PostAuthorize("hasRole('ADMIN')")
    //Con el post guardo desde el front en la DB
    @PostMapping("/hyf/crear")
    //Con el RequestBody le envío los datos al back desde el body
    public String crearHyF(@RequestBody HeaderyFooter hyf){
        //Envío los datos con el método save creado en el Servicio
        ihyfservicio.saveHeaderyFooter(hyf);
        return "Se creo correctamente la hyf";
    }
    
    //Con el PostAuthorize autorizo que un determinado usuario pueda ejecutar esta acción
    @PostAuthorize("hasRole('ADMIN')")
    //Con el delete elimino desde el front a la DB por su ID como variable
    @DeleteMapping("/hyf/borrar/{id}")
    //Con el PathVariable le envío la variable ID a eliminar
    public String deleteHyF(@PathVariable Long id){
        //Ejecuto el método delete creado en el Servicio
        ihyfservicio.deleteHeaderyFooter(id);
        return "Se eliminó correctamente la hyf";
    }
    
    
    //Si quiero modificar utilizo PutMapping por la variable ID 
    @PutMapping("/hyf/modificar/{id}")//Quedaría asi: URL:PUERTO/hyf/modificar/id/param&param&param&param&param&param&param&param&param
    public HeaderyFooter modificarHyF(@PathVariable Long id,
                                      @RequestParam("imagenHeaderFooter") String nvoImagen,
                                      @RequestParam("nombreHeaderFooter") String nvoNombre,
                                      @RequestParam("fechaHeaderFooter") String nvoFecha,
                                      @RequestParam("ciudadHeaderFooter") String nvoCiudad,
                                      @RequestParam("provinciaHeaderFooter") String nvoProvincia,
                                      @RequestParam("paisHeaderFooter") String nvoPais,
                                      @RequestParam("imagenBotonEditar") String nvoEditar,
                                      @RequestParam("imagenBotonCerrar") String nvoCerrar,
                                      @RequestParam("imagenBotonEliminar") String nvoEliminar,
                                      @RequestParam("imagenBanner") String nvoBanner){
        HeaderyFooter hyf = ihyfservicio.finHeaderyFooter(id);
        
        hyf.setImagenHeaderFooter(nvoImagen);
        hyf.setNombreHeaderFooter(nvoNombre);
        hyf.setFechaHeaderFooter(nvoFecha);
        hyf.setCiudadHeaderFooter(nvoCiudad);
        hyf.setProvinciaHeaderFooter(nvoProvincia);
        hyf.setPaisHeaderFooter(nvoPais);
        hyf.setImagenBotonEditar(nvoEditar);
        hyf.setImagenBotonCerrar(nvoCerrar);
        hyf.setImagenBotonEliminar(nvoEliminar);
        hyf.setImagenBanner(nvoBanner);
                
        ihyfservicio.saveHeaderyFooter(hyf);
        
        return hyf;
    }
    
    @GetMapping("/hyf/traer/datos")
    public HeaderyFooter finHeaderyFooter(){
        return ihyfservicio.finHeaderyFooter((long)1);
    }
}
