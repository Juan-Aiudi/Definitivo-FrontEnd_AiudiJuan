package com.portfolio.jca.entidad;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Usuario implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUsuario;
    
    @NotNull
    @Size(min = 1, max = 100, message = "no cumple con la longitud deseada entre 1 y 100 caracteres")
    private String usuario;
    
    @NotNull
    @Size(min = 1, max = 50, message = "no cumple con la longitud deseada entre 1 y 50 caracteres")
    private String clave;
    
    @Transient
    private String token;

    @JsonIgnore //Al generar el Json no genera esta parte para que no ocupe mucho lugar
    @OneToOne(fetch = FetchType.LAZY) //Con lazy solo se llama a los datos de PersonaAcercaDe cuando sea necesario
    @JoinColumn(name = "idAcercaDe") //Clave foranea con el campo idAcercaDe que es el que está en la tabla
    private PersonaAcercaDe personaAcercaDe;
}
