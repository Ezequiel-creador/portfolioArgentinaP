/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolioweb.portfolio.service;

import com.portfolioweb.portfolio.Model.Experiencia;
import java.util.List;

/**
 *
 * @author ekiel
 */
public interface iExperienciaService {
      public List<Experiencia> verExperiencia ();
   public void crearExperiencia (Experiencia exp);
   public void borrarExperiencia (Long id);
   public Experiencia buscarExperiencia (Long id);  
   
}
