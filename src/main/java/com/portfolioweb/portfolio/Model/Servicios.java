
package com.portfolioweb.portfolio.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
@Table(name="servicios")
public class Servicios {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
   private Long id;
   private String url;
   private String titulo;
   private String descripcion;

    public Servicios(String url, String titulo, String descripcion) {
        this.url = url;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}
