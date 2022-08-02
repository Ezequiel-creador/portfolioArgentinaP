
package com.portfolioweb.portfolio.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter @Getter
@Entity
@Table(name="conocimientos")
public class Conocimientos {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private int porcentajepr;
    private int porcentajesg;
    private int porcentajetr;
    private int porcentaject;
    private int porcentajeqt;

    public Conocimientos(int porcentajepr, int porcentajesg, int porcentajetr, int porcentaject, int porcentajeqt) {
        this.porcentajepr = porcentajepr;
        this.porcentajesg = porcentajesg;
        this.porcentajetr = porcentajetr;
        this.porcentaject = porcentaject;
        this.porcentajeqt = porcentajeqt;
    }




}