/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolioweb.portfolio.service;

import com.portfolioweb.portfolio.Model.Contacto;
import com.portfolioweb.portfolio.repository.ContactoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactoService implements iContactoService {
   @Autowired
   public ContactoRepository conRepo;
    @Override
    public List<Contacto> verContacto() {
        return conRepo.findAll();
    }

    @Override
    public void crearContacto(Contacto con) {
       conRepo.save(con);
    }

    @Override
    public void borrarContacto(Long id) {
        conRepo.deleteById(id);
    }

    @Override
    public Contacto buscarContacto(Long id) {
       return conRepo.findById(id).orElse(null);
    }
      
}
