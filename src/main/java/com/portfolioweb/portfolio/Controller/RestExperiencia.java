
package com.portfolioweb.portfolio.Controller;

import com.portfolioweb.portfolio.Model.Experiencia;
import com.portfolioweb.portfolio.service.iExperienciaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestExperiencia {
     @Autowired
 private iExperienciaService expServ;    
  
 @PostMapping("/new/experiencia")
public void agregarExperiencia(@RequestBody Experiencia exp){
expServ.crearExperiencia(exp);
}
        
@GetMapping ("/ver/experiencias")
@ResponseBody
public List<Experiencia> verExperiencias(){
return expServ.verExperiencia();
}
@DeleteMapping("/delete/experiencia/{id}")
   public void borrarExperiencia (@PathVariable Long id) {
expServ.borrarExperiencia(id);
   }
   
   @GetMapping ("/buscar/experiencia/perfil")
     public Experiencia buscarExperiencia() {
    return expServ.buscarExperiencia((long)1);
     }
    
}
