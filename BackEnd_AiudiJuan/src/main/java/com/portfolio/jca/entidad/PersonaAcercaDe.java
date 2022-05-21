package com.portfolio.jca.entidad;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class PersonaAcercaDe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Size(min = 1, max = 50, message = "no cumple con la longitud")
    private String nombre;
    @NotNull
    @Size(min = 1, max = 50, message = "no cumple con la longitud")
    private String apellido;
    @NotNull
    @Size(min = 1, max = 50, message = "no cumple con la longitud")
    private String titulo;
    @NotNull
    @Size(min = 1, max = 300, message = "no cumple con la longitud")
    private String imagenAcercaDe;
    @NotNull
    @Size(min = 1, max = 3000, message = "no cumple con la longitud")
    private String descripcionAcercaDe;
}
