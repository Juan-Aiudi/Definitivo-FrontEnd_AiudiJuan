package com.portfolio.jca.entidad;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class HabilidadesDuras {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idHabDuras;
    
    @NotNull
    private int porcentajeDuras;
    
    @NotNull
    @Size(min = 1, max = 30, message = "no cumple con la longitud deseada entre 1 y 30 caracteres")
    private String subtituloDuras;
    
    @NotNull
    @Size(min = 1, max = 30, message = "no cumple con la longitud deseada entre 1 y 30 caracteres")
    private String sizeSubTituloDuras;
    
    @JsonIgnore //Al generar el Json no genera esta parte para que no ocupe mucho lugar
    @ManyToOne(fetch = FetchType.LAZY) //Con lazy solo se llama a los datos de PersonaAcercaDe cuando sea necesario
    @JoinColumn(name = "idAcercaDe") //Clave foranea con el campo idAcercaDe que es el que está en la tabla
    private PersonaAcercaDe personaAcercaDe;
}
