package com.iue.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.iue.entity.TypeId;
import com.iue.repository.TypeIdRepository;

@Controller
@RequestMapping(path = "/pos")
public class TypeIdController {

	@Autowired
	private TypeIdRepository typeIdRepository;

	@GetMapping(path = "/getalltypeid")
	public @ResponseBody Iterable<TypeId> getAllCustomer() {
		// This returns a JSON or XML with the users
		return typeIdRepository.findAll();

	}
	
	@GetMapping(path = "/gettypeid")
	public @ResponseBody Iterable<TypeId> getCustomer(@RequestParam Long id) {
		// This returns a JSON or XML with the users
		return typeIdRepository.findById(id);

	}

	@GetMapping(path = "/addtypeid") // Map ONLY GET Requests
	public @ResponseBody String addNewCustomer(@RequestParam Long id
			, @RequestParam String description) {

		typeIdRepository.save(new TypeId(id, description));

		return "Saved";
	}
	
	@PostMapping(path="/updatetypeid") 
	public @ResponseBody ResponseEntity<String> updateNewTypeId (
			@RequestBody TypeId typeId) {
		typeIdRepository.save(typeId);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	@PostMapping(path="/removetypeid") 
	public @ResponseBody ResponseEntity<String> removeCustomer (
			@RequestBody TypeId typeId) {
		typeIdRepository.delete(typeId);
		return new ResponseEntity<String>(HttpStatus.OK);
	}


}
