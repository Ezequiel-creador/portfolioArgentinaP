/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolioweb.portfolio.service;

import com.portfolioweb.portfolio.Model.Contacto;
import java.util.List;

/**
 *
 * @author ekiel
 */
public interface iContactoService {
     public List<Contacto> verContacto ();
   public void crearContacto (Contacto con);
   public void borrarContacto (Long id);
   public Contacto buscarContacto (Long id);
}
