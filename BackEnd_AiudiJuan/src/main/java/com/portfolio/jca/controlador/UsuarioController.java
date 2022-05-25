package com.portfolio.jca.controlador;

import com.portfolio.jca.entidad.Usuario;
import com.portfolio.jca.interfaz.IUsuarioServicio;
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
public class UsuarioController {
    @Autowired IUsuarioServicio iusuarioservicio;
    
    //Con este get traigo de la DB al front
    @GetMapping("/usuario/lista")
    public List<Usuario> getUsuarios(){
        //Devuelvo el método get del Servicio
        return iusuarioservicio.getUsuario();
    }
    
    //Con el post guardo desde el front en la DB
    @PostMapping("/usuario/crear")
    //Con el RequestBody le envío los datos al back desde el body
    public String crearUsuario(@RequestBody Usuario usuario){
        //Envío los datos con el método save creado en el Servicio
        iusuarioservicio.saveUsuario(usuario);
        return "Se creo correctamente el usuario";
    }
    
    //Con el delete elimino desde el front a la DB por su ID como variable
    @DeleteMapping("/usuario/borrar/{id}")
    //Con el PathVariable le envío la variable ID a eliminar
    public String deleteUsuario(@PathVariable Long id){
        //Ejecuto el método delete creado en el Servicio
        iusuarioservicio.deleteUsuario(id);
        return "Se eliminó correctamente el usuario";
    }
    
    //Si quiero modificar utilizo PutMapping por la variable ID 
    @PutMapping("/usuario/modificar/{id}")//Quedaría asi: URL:PUERTO/usuario/modificar/id/param&param
    public Usuario modificarUsuario (@PathVariable Long id,
                                     @RequestParam("usuario") String nvoUsuario,
                                     @RequestParam("clave") String nvoClave){
        Usuario usuario = iusuarioservicio.finUsuario(id);
        
        usuario.setUsuario(nvoUsuario);
        usuario.setClave(nvoClave);
        
                
        iusuarioservicio.saveUsuario(usuario);
        
        return usuario;
    }
    
}
