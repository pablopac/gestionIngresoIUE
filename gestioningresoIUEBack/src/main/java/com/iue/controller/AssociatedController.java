package com.iue.controller;

import java.net.URI;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.iue.entity.*;
import com.iue.repository.AssociatedRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "/associatedAPI")
public class AssociatedController {
	@Autowired
	private AssociatedRepository associatedRepository;
	
	@PostMapping(path = "/addassociated", consumes = "application/json", produces = "application/json")
	public Associated addNewAssociatedApi(@RequestBody Associated associated) {
		// add resource
		associated = associatedRepository.save(associated);
		return associated;
	}
	
	@GetMapping(path = "/associatedgetall", produces = "application/json")
	public Associateds getAllAssociatedsApi() {
		Associateds response = new Associateds();
		ArrayList<Associated> list = new ArrayList<>();
		associatedRepository.findAll().forEach(e -> list.add(e));
		response.setAssociatedList(list);
		return response;
	}
	
	@PostMapping(path = "/updateassociated", consumes = "application/json", produces = "application/json")
	public Associated saveAssociatedApi(@RequestBody Associated associated) {
		// add resource
		associatedRepository.save(associated);
		return associated;
	}

	@PostMapping(path = "/associatedremove", consumes = "application/json")
	public @ResponseBody ResponseEntity<String> deleteAssociatedApi(@RequestBody Associated associated) {
		associatedRepository.deleteById((associated.getIdAssociated()));
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	
	@GetMapping(path="/associateds", produces = "application/json")
    public Associateds getAssociateds() 
    {
		Associateds response = new Associateds();
		ArrayList<Associated> list = new ArrayList<>();
		associatedRepository.findAll().forEach(e -> list.add(e));
		response.setAssociatedList(list);
        return response;
    }
    
    @PostMapping(path= "/associateds", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Object> addAssociated(@RequestBody Associated associated) {       
                
        //add resource
    	associated = associatedRepository.save(associated);
        
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
		return associatedRepository.findAll();

	}

	@GetMapping(path = "/addassociated") // Map ONLY GET Requests
	public @ResponseBody String addNewAssociated(@RequestParam Integer id, @RequestParam String associated_id, @RequestParam String name) {

		associatedRepository.save(new Associated(id, associated_id, name));

		return "Saved";
	}

	@PostMapping(path = "/updateassociated")
	public @ResponseBody ResponseEntity<String> updateNewAssociated(@RequestBody Associated associated) {
		associatedRepository.save(associated);
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	@PostMapping(path = "/removeassociated")
	public @ResponseBody ResponseEntity<String> removeAssociated(@RequestBody Associated associated) {
		associatedRepository.delete(associated);
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	/*@GetMapping(path = "/getbyname")
	public @ResponseBody Iterable<Associated> getByName(@RequestParam String name) {
		return associatedRepository.findByName(name);
	}

	@GetMapping(path = "/findByNameContaining")
	public @ResponseBody Iterable<Associated> findByNameContaining(@RequestParam String name) {
		return associatedRepository.findByNameContaining(name);

	}*/

}