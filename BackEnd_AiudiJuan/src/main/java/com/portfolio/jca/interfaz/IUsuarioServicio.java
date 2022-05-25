package com.portfolio.jca.interfaz;

import com.portfolio.jca.entidad.Usuario;
import java.util.List;


public interface IUsuarioServicio {
    //Traigo una lista de Usuarios
    public List<Usuario> getUsuario();
    
    //Guardar un usuario
    public void saveUsuario(Usuario usuario);
    
    //Eliminar usuario
    public void deleteUsuario(Long id);
    
    //Buscar un Usuario por ID
    public Usuario finUsuario(Long id);
}
