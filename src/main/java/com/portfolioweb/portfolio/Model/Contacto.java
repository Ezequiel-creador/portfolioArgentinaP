
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
@Table(name="contacto")
public class Contacto {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
    
    private Long id;
    private int telefono;
    private String correourl;
    private String redesurl;
    
   

    public Contacto(int telefono, String correourl, String redesurl, Acerca acerca) {
        this.telefono = telefono;
        this.correourl = correourl;
        this.redesurl = redesurl;
    
    }
}
