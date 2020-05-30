package com.iue.controller;


import java.net.URI;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.iue.entity.*;
import com.iue.repository.UsersysRepository;


@Controller   
@RequestMapping(path="/pos") 
public class UsersysController {
	@Autowired 
	private UsersysRepository UsersysRepository;

	
	@GetMapping(path="/getallusersys")
	public @ResponseBody Iterable<Usersys> getAllUsersys() {
		// This returns a JSON or XML with the users
		return UsersysRepository.findAll();
		
	}
	
	
	
	@GetMapping(path="/addusersys") // Map ONLY GET Requests
	public @ResponseBody String addNewUsersys (
			@RequestParam String username,
			@RequestParam String password) {

		UsersysRepository.save(new 
				Usersys(username, password));
		
		return "Saved";
	}
	
	
	@PostMapping(path="/updateusersys") 
	public @ResponseBody ResponseEntity<String> updateNewUsersys (
			@RequestBody Usersys usersys) {
		UsersysRepository.save(usersys);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	@PostMapping(path="/removeusersys") 
	public @ResponseBody ResponseEntity<String> removeUsersys (
			@RequestBody Usersys usersys) {
		UsersysRepository.delete(usersys);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	
	/* Otras Formas  pero Bajo jUnit Testing*/
	@GetMapping(path="/userssys", produces = "application/json")
    public Userssys getUsersys() 
    {
		Userssys response = new Userssys();
		ArrayList<Usersys> list = new ArrayList<>();
		UsersysRepository.findAll().forEach(e -> list.add(e));
		response.setUsersysList(list);
        return response;
    }
    
    @PostMapping(path= "/userssys", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Object> addUsersys(@RequestBody Usersys usersys) {       
                
        //add resource
    	usersys = UsersysRepository.save(usersys);
        
        //Create resource location
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                                    .path("/{id}")
                                    .buildAndExpand(usersys.getId())
                                    .toUri();
        
        //Send location in response
        return ResponseEntity.created(location).build();
    }
	
	


	

	
	
	
	
	
}
