package com.portfolioweb.portfolio.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "acerca")

public class Acerca {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nombreCompleto;
    private String encabezado;
    private String infoPersona;
    private String url;

   
    public Acerca() {
    }

    public Acerca(String nombreCompleto, String encabezado, String infoPersona, String urlCv, String url, Experiencia experiencia, Servicios servicios, Conocimientos conocimientos, Educacion educacion, Contacto contacto) {
        this.nombreCompleto = nombreCompleto;
        this.encabezado = encabezado;
        this.infoPersona = infoPersona;
        this.url = url;
        
    }

}
