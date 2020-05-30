package com.iue.controller;

import java.net.URI;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.iue.entity.Organizacion;
import com.iue.entity.Organizaciones;
import com.iue.repository.OrganizacionRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path="/organizacionAPI")
public class OrganizacionController {
	@Autowired 
	private OrganizacionRepository organizacionRepository;
	
	/* Otras Formas  pero Bajo jUnit Testing*/
	@GetMapping(path="/organizaciones", produces = "application/json")
    public Organizaciones getOrganizaciones() 
    {
		Organizaciones response = new Organizaciones();
		ArrayList<Organizacion> list = new ArrayList<>();
		organizacionRepository.findAll().forEach(e -> list.add(e));
		response.setOrganizacionList(list);
        return response;
    }
	
	@PostMapping(path= "/organizaciones", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Object> addorganizacion(@RequestBody Organizacion organizacion) {       
                
        //add resource
    	organizacion = organizacionRepository.save(organizacion);
        
        //Create resource location
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                                    .path("/{id}")
                                    .buildAndExpand(organizacion.getId())
                                    .toUri();
        
        //Send location in response
        return ResponseEntity.created(location).build();
    }
	/*
	@GetMapping(path="/getallorganizacion")
	public @ResponseBody Iterable<Organizacion> getAllOrganizacion() {
		// This returns a JSON or XML with the users
		return organizacionRepository.findAll();	
	}
	
	@GetMapping(path="/addorganizacion") // Map ONLY GET Requests
	public @ResponseBody String addNewOrganizacion (
			@RequestParam int id,
			@RequestParam String organizacion_id,
			@RequestParam String name) {

		organizacionRepository.save(new 
				Organizacion(id, organizacion_id, name));
		
		return "Saved";
	}
	
	@PostMapping(path="/updateorganizacion") 
	public @ResponseBody ResponseEntity<String> updateNewOrganizacion (
			@RequestBody Organizacion organizacion) {
		organizacionRepository.save(organizacion);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	@PostMapping(path="/removeorganizacion") 
	public @ResponseBody ResponseEntity<String> removeOrganizacion (
			@RequestBody Organizacion organizacion) {
		organizacionRepository.delete(organizacion);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	*/
	
	@GetMapping(path="/getbyname")
	public @ResponseBody Iterable<Organizacion> getByName(
			@RequestParam String name
			) {
		return organizacionRepository.findByName(name);		
	}
	
	
	@GetMapping(path="/findByNameContaining")
	public @ResponseBody Iterable<Organizacion> findByNameContaining(
			@RequestParam String name
			) {
		return organizacionRepository.findByNameContaining(name);
			
	}
	// ***Api Final Front
		@PostMapping(path = "/addorganizacion", consumes = "application/json", produces = "application/json")
		public Organizacion addNewOrganizacionApi(@RequestBody Organizacion organizacion) {
			// add resource
			organizacion = organizacionRepository.save(organizacion);
			return organizacion;
		}

		// ***Api Final Para FRONT
		@GetMapping(path = "/organizaciongetall", produces = "application/json")
		public Organizaciones getAllEmployeesApi() {
			Organizaciones response = new Organizaciones();
			ArrayList<Organizacion> list = new ArrayList<>();
			organizacionRepository.findAll().forEach(e -> list.add(e));
			response.setOrganizacionList(list);
			return response;
		}

		// ***Api Final Front
		@PostMapping(path = "/updateorganizacion", consumes = "application/json", produces = "application/json")
		public Organizacion saveOrganizacionApi(@RequestBody Organizacion organizacion) {
			// add resource
			organizacionRepository.save(organizacion);
			return organizacion;
		}

		// ***Api Final Front
		@PostMapping(path = "/organizacionremove", consumes = "application/json")
		public @ResponseBody ResponseEntity<String> deleteOrganizacionApi(@RequestBody Organizacion organizacion) {
			organizacionRepository.deleteById(organizacion.getId());
			return new ResponseEntity<String>(HttpStatus.OK);
		}



}
