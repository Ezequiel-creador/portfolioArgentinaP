
package com.portfolioweb.portfolio.service;

import com.portfolioweb.portfolio.Model.Servicios;
import java.util.List;

/**
 *
 * @author ekiel
 */
public interface iServiciosService {
   public List<Servicios> verServicios ();
   public void crearServicios (Servicios ser);
   public void borrarServicios (Long id);
   public Servicios buscarServicios (Long id);  
   
}
