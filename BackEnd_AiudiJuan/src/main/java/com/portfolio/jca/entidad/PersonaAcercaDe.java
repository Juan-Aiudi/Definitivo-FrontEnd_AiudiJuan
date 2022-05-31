package com.portfolio.jca.entidad;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class PersonaAcercaDe {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAcercaDe;
    
    @NotNull
    @Size(min = 1, max = 50, message = "no cumple con la longitud deseada entre 1 y 50 caracteres")
    private String nombreAcercaDe;
    
    @NotNull
    @Size(min = 1, max = 50, message = "no cumple con la longitud deseada entre 1 y 50 caracteres")
    private String apellidoAcercaDe;
    
    @NotNull
    @Size(min = 1, max = 50, message = "no cumple con la longitud deseada entre 1 y 50 caracteres")
    private String tituloAcercaDe;
    
    @NotNull
    @Size(min = 1, max = 1000, message = "no cumple con la longitud deseada entre 1 y 1000 caracteres")
    private String imagenAcercaDe;
    
    @NotNull
    @Size(min = 1, max = 3000, message = "no cumple con la longitud deseada entre 1 y 3000 caracteres")
    private String descripcionAcercaDe;
}
