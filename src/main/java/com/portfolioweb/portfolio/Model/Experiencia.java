
package com.portfolioweb.portfolio.Model;

import java.util.Date;
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
@Table (name="experiencia")
public class Experiencia {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
   private Long id; 
   private String puesto;
   private String empresa;
   private String objetivo;
   private String descripcion;
   private Date fecha;
   private String url;
   @ManyToOne
   @JoinColumn(name="id-acerca")
   private Acerca acerca;
  
   
    public Experiencia(String puesto, String empresa, String objetivo, String descripcion, Date fecha, String url, Acerca acerca) {
        this.puesto = puesto;
        this.empresa = empresa;
        this.objetivo = objetivo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.url = url;
        this.acerca = acerca;
    }
   
   
   
}
