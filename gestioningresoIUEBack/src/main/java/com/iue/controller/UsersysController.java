package com.iue.controllers;


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

import com.iue.entity.*;
import com.iue.repository.UsersysRepository;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "/usersysAPI")
public class UsersysController {
	@Autowired
	private UsersysRepository usersysRepository;

	// ***Api Final Front
	@PostMapping(path = "/addusersys", consumes = "application/json", produces = "application/json")
	public Usersys addNewUsersysApi(@RequestBody Usersys usersys) {
		// add resource
		usersys = usersysRepository.save(usersys);
		return usersys;
	}

	// ***Api Final Para FRONT
	@GetMapping(path = "/usersysgetall", produces = "application/json")
	public Userssys getAllUserssysApi() {
		Userssys response = new Userssys();
		ArrayList<Usersys> list = new ArrayList<>();
		usersysRepository.findAll().forEach(e -> list.add(e));
		response.setUsersysList(list);
		return response;
	}

	// ***Api Final Front
	@PostMapping(path = "/updateusersys", consumes = "application/json", produces = "application/json")
	public Usersys saveUsersysApi(@RequestBody Usersys usersys) {
		// add resource
		usersysRepository.save(usersys);
		return usersys;
	}

	// ***Api Final Front
	@PostMapping(path = "/usersysremove", consumes = "application/json")
	public @ResponseBody ResponseEntity<String> deleteUsersysApi(@RequestBody Usersys usersys) {
		usersysRepository.deleteById(usersys.getId());
		return new ResponseEntity<String>(HttpStatus.OK);
	}

}

