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
public class HabilidadesBlandas {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idHabBlandas;
    
    @NotNull
    private int porcentajeBlandas;
    
    @NotNull
    @Size(min = 1, max = 15, message = "no cumple con la longitud deseada entre 1 y 15 caracteres")
    private String subtituloBlandas;
    
    @NotNull
    @Size(min = 1, max = 15, message = "no cumple con la longitud deseada entre 1 y 15 caracteres")
    private String sizeSubTituloBlandas;
    
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idAcercaDe")
    private PersonaAcercaDe personaAcercaDe;
}
