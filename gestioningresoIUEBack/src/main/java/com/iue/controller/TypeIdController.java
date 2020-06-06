package com.iue.controller;

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

import com.iue.entity.TypeIds;
import com.iue.entity.TypeId;
import com.iue.repository.TypeIdRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "/pos")
public class TypeIdController {

	@Autowired
	private TypeIdRepository typeIdRepository;

	@GetMapping(path = "/getalltypeid",  produces = "application/json")
	public @ResponseBody TypeIds getAllCustomer() {
		// This returns a JSON or XML with the users
		TypeIds response = new TypeIds();
		ArrayList<TypeId> list = new ArrayList<>();
		typeIdRepository.findAll().forEach(e -> list.add(e));
		response.setTypeIdList(list);

		
		return response;

	}
	
	@GetMapping(path = "/gettypeid", produces = "application/json")
	public @ResponseBody Iterable<TypeId> getCustomer(@RequestParam Long id) {
		// This returns a JSON or XML with the users
		return typeIdRepository.findById(id);

	}
	
	@PostMapping(path = "/addtypeid", consumes = "application/json", produces = "application/json") // Map ONLY GET Requests
	public @ResponseBody TypeId addNewCustomer(@RequestBody TypeId typeId) {

		typeIdRepository.save(typeId);

		return typeId;
	}


	@PostMapping(path="/updatetypeid",  consumes = "application/json", produces = "application/json") 
	public @ResponseBody ResponseEntity<String> updateNewTypeId (
			@RequestBody TypeId typeId) {
		typeIdRepository.save(typeId);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	@PostMapping(path="/removetypeid", consumes = "application/json", produces = "application/json") 
	public @ResponseBody ResponseEntity<String> removeCustomer (
			@RequestBody TypeId typeId) {
		typeIdRepository.delete(typeId);
		return new ResponseEntity<String>(HttpStatus.OK);
	}


}
