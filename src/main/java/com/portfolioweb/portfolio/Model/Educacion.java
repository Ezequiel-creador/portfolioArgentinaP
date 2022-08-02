
package com.portfolioweb.portfolio.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
@Table(name="educacion")
public class Educacion {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String tipo;
    private String titulo;
     @ManyToOne
   @JoinColumn(name="id-acerca")
   private Acerca acerca;
  
    public Educacion(String tipo, String titulo, Acerca acerca) {
        this.tipo = tipo;
        this.titulo = titulo;
        this.acerca = acerca;
    }
}
