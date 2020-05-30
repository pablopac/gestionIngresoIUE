package com.iue.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.iue.entity.Associated;

import java.util.List;
@Repository

public interface AssociatedRepository extends CrudRepository<Associated, Integer> {

    List<Associated> findByName(String name);	    
    List<Associated> findByNameContaining(String name);
	
}	