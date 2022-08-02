/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolioweb.portfolio.service;

import com.portfolioweb.portfolio.Model.Servicios;
import com.portfolioweb.portfolio.repository.ServiciosRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiciosService implements iServiciosService{
     @Autowired
   public ServiciosRepository serRepo;
    @Override
    public List<Servicios> verServicios() {
        return serRepo.findAll();
    }

    @Override
    public void crearServicios(Servicios ser) {
       serRepo.save(ser);
    }

    @Override
    public void borrarServicios(Long id) {
        serRepo.deleteById(id);
    }

    @Override
    public Servicios buscarServicios(Long id) {
       return serRepo.findById(id).orElse(null);
    }
}
