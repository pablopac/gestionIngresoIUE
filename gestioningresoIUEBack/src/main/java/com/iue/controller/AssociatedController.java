package com.iue.controller;

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
import com.iue.repository.AssociatedRepository;

@RestController
public class AssociatedController {
	@Autowired
	private AssociatedRepository AssociatedRepository;
	
	
	@GetMapping(path="/associateds", produces = "application/json")
    public Associateds getAssociateds() 
    {
		Associateds response = new Associateds();
		ArrayList<Associated> list = new ArrayList<>();
		AssociatedRepository.findAll().forEach(e -> list.add(e));
		response.setAssociatedList(list);
        return response;
    }
    
    @PostMapping(path= "/associateds", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Object> addAssociated(@RequestBody Associated associated) {       
                
        //add resource
    	associated = AssociatedRepository.save(associated);
        
        //Create resource location
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                                    .path("/{id}")
                                    .buildAndExpand(associated.getIdAssociated())
                                    .toUri();
        
        //Send location in response
        return ResponseEntity.created(location).build();
    }
	

	@GetMapping(path = "/getallassociated")
	public @ResponseBody Iterable<Associated> getAllAssociated() {
		// This returns a JSON or XML with the users
		return AssociatedRepository.findAll();

	}

	@GetMapping(path = "/addassociated") // Map ONLY GET Requests
	public @ResponseBody String addNewAssociated(@RequestParam Long id, @RequestParam String associated_id, @RequestParam String name) {

		AssociatedRepository.save(new Associated(id, associated_id, name));

		return "Saved";
	}

	@PostMapping(path = "/updateassociated")
	public @ResponseBody ResponseEntity<String> updateNewAssociated(@RequestBody Associated associated) {
		AssociatedRepository.save(associated);
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	@PostMapping(path = "/removeassociated")
	public @ResponseBody ResponseEntity<String> removeAssociated(@RequestBody Associated associated) {
		AssociatedRepository.delete(associated);
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	@GetMapping(path = "/getbyname")
	public @ResponseBody Iterable<Associated> getByName(@RequestParam String name) {
		return AssociatedRepository.findByName(name);
	}

	@GetMapping(path = "/findByNameContaining")
	public @ResponseBody Iterable<Associated> findByNameContaining(@RequestParam String name) {
		return AssociatedRepository.findByNameContaining(name);

	}

}