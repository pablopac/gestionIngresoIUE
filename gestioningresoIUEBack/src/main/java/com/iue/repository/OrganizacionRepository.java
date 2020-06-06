package com.iue.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.iue.entity.Organizacion;
import org.springframework.stereotype.Repository;
@Repository
public interface OrganizacionRepository extends CrudRepository<Organizacion, Integer> {
	
    List<Organizacion> findByName(String name);	    
    List<Organizacion> findByNameContaining(String name);

}
