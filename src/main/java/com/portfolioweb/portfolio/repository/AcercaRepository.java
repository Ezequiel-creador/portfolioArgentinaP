
package com.portfolioweb.portfolio.repository;

import com.portfolioweb.portfolio.Model.Acerca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@Repository
public interface AcercaRepository extends JpaRepository <Acerca, Long> {
    
}
