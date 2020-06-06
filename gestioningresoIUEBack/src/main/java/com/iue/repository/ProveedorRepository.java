package com.iue.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.iue.entity.Proveedor;


	// This will be AUTO IMPLEMENTED by Spring into a Bean called CustomerRepository
	// CRUD refers Create, Read, Update, Delete
	public interface ProveedorRepository extends CrudRepository<Proveedor, Integer> {
	
	    
	  
		
	}	