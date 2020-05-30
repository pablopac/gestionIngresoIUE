package com.app.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.app.models.Area;


	// This will be AUTO IMPLEMENTED by Spring into a Bean called CustomerRepository
	// CRUD refers Create, Read, Update, Delete
	public interface AreaRepository extends CrudRepository<Area, Integer> {
	
	    
	  
		
	}	