
package com.portfolioweb.portfolio.Controller;

import com.portfolioweb.portfolio.Model.Conocimientos;
import com.portfolioweb.portfolio.service.iConocimientosService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class RestConocimientos {
  
   @Autowired
 private iConocimientosService conoServ;    
  
 @PostMapping("/new/conocimientos")
public void agregarConocimientos(@RequestBody Conocimientos cono){
conoServ.crearConocimientos(cono);
}
        
@GetMapping ("/ver/conocimientoss")
@ResponseBody
public List<Conocimientos> verConocimientoss(){
return conoServ.verConocimientos();
}

   
   
    
    
    
    
    
    
}
