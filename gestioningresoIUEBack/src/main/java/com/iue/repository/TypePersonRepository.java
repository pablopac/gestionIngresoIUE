package com.iue.repository;

import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import com.iue.entity.TypePerson;

import java.util.List;
@Repository

public interface TypePersonRepository extends CrudRepository<TypePerson, Integer> {

    List<TypePerson> findByName(String name);	    
    List<TypePerson> findByNameContaining(String name);
	
}	