package com.iue.controllers;

import java.net.URI;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.iue.entity.*;
import com.iue.repository.TypePersonRepository;

@RestController
public class TypePersonController {
	@Autowired
	private TypePersonRepository typePersonRepository;
	
	
	@GetMapping(path="/typepersons", produces = "application/json")
    public TypePersons getTypePersons() 
    {
		TypePersons response = new TypePersons();
		ArrayList<TypePerson> list = new ArrayList<>();
		typePersonRepository.findAll().forEach(e -> list.add(e));
		response.setTPList(list);
        return response;
    }
    
    @PostMapping(path= "/typepersons", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Object> addAssociated(@RequestBody TypePerson typeperson) {       
                
        //add resource
    	typeperson = typePersonRepository.save(typeperson);
        
        //Create resource location
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                                    .path("/{id}")
                                    .buildAndExpand(typeperson.getIdTP())
                                    .toUri();
        
        //Send location in response
        return ResponseEntity.created(location).build();
    }
	

	@GetMapping(path = "/getalltypeperson")
	public @ResponseBody Iterable<TypePerson> getAllAssociated() {
		// This returns a JSON or XML with the users
		return typePersonRepository.findAll();

	}

	@GetMapping(path = "/addtypeperson") // Map ONLY GET Requests
	public @ResponseBody String addNewAssociated(@RequestParam Long id, @RequestParam String tp_id, @RequestParam String name) {

		typePersonRepository.save(new TypePerson(id, tp_id, name));

		return "Saved";
	}

	@PostMapping(path = "/updatetypeperson")
	public @ResponseBody ResponseEntity<String> updateNewAssociated(@RequestBody TypePerson typeperson) {
		typePersonRepository.save(typeperson);
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	@PostMapping(path = "/removetypeperson")
	public @ResponseBody ResponseEntity<String> removeAssociated(@RequestBody TypePerson typeperson) {
		typePersonRepository.delete(typeperson);
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	@GetMapping(path = "/getbyname")
	public @ResponseBody Iterable<TypePerson> getByName(@RequestParam String name) {
		return typePersonRepository.findByName(name);
	}

	@GetMapping(path = "/findByNameContaining")
	public @ResponseBody Iterable<TypePerson> findByNameContaining(@RequestParam String name) {
		return typePersonRepository.findByNameContaining(name);

	}

}