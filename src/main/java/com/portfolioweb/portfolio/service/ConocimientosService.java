/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolioweb.portfolio.service;

import com.portfolioweb.portfolio.Model.Conocimientos;
import com.portfolioweb.portfolio.repository.ConocimientosRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service

public class ConocimientosService implements iConocimientosService {
   @Autowired
   public ConocimientosRepository conoRepo;
    @Override
    public List<Conocimientos> verConocimientos() {
        return conoRepo.findAll();
    }

    @Override
    public void crearConocimientos(Conocimientos cono) {
       conoRepo.save(cono);
    }

    @Override
    public void borrarConocimientos(Long id) {
        conoRepo.deleteById(id);
    }

    @Override
    public Conocimientos buscarConocimientos(Long id) {
       return conoRepo.findById(id).orElse(null);
    }
      
}
