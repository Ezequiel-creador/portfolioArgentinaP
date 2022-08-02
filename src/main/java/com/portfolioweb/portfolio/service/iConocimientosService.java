/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolioweb.portfolio.service;

import com.portfolioweb.portfolio.Model.Conocimientos;
import java.util.List;


public interface iConocimientosService {
    public List<Conocimientos> verConocimientos ();
   public void crearConocimientos (Conocimientos cono);
   public void borrarConocimientos (Long id);
   public Conocimientos buscarConocimientos (Long id); 
}
