
package com.portfolioweb.portfolio.service;

import com.portfolioweb.portfolio.Model.Acerca;
import java.util.List;


public interface iAcercaService {
   public List<Acerca> verAcerca ();
   public void crearAcerca (Acerca acer);
   public void borrarAcerca (Long id);
   public Acerca buscarAcerca (Long id);
}
