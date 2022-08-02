/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolioweb.portfolio.Controller;

import com.portfolioweb.portfolio.Model.Contacto;
import com.portfolioweb.portfolio.service.iContactoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestContacto {
      @Autowired
 private iContactoService conServ;    
  
 @PostMapping("/new/contacto")
public void agregarContacto(@RequestBody Contacto con){
conServ.crearContacto(con);
}
        
@GetMapping ("/ver/contactos")
@ResponseBody
public List<Contacto> verContactos(){
return conServ.verContacto();
}
 
}
