package com.portfolio.jca.servicio;

import com.portfolio.jca.entidad.Usuario;
import com.portfolio.jca.interfaz.IUsuarioServicio;
import com.portfolio.jca.repositorio.IUsuarioRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DesarrolloUsuarioService implements IUsuarioServicio{
    //Con el autowired realizo inyección de dependencia
    @Autowired IUsuarioRepositorio iusuariorepositorio;

    @Override
    public List<Usuario> getUsuario() {
        List<Usuario> usuario = iusuariorepositorio.findAll();
        return usuario;
    }

    @Override
    public void saveUsuario(Usuario usuario) {
        iusuariorepositorio.save(usuario);
    }

    @Override
    public void deleteUsuario(Long id) {
        iusuariorepositorio.deleteById(id);
    }

    @Override
    public Usuario finUsuario(Long id) {
        Usuario usuario = iusuariorepositorio.findById(id).orElse(null);
        return usuario;
    }
    
}
