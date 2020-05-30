package com.app.controllers;


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

import com.app.models.*;
import com.app.repository.FacultadRepository;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "/facultadAPI")
public class FacultadController {
	@Autowired
	private FacultadRepository facultadRepository;

	// ***Api Final Front
	@PostMapping(path = "/addfacultad", consumes = "application/json", produces = "application/json")
	public Facultad addNewFacultadApi(@RequestBody Facultad facultad) {
		// add resource
		facultad = facultadRepository.save(facultad);
		return facultad;
	}

	// ***Api Final Para FRONT
	@GetMapping(path = "/facultadgetall", produces = "application/json")
	public Facultades getAllFacultadApi() {
		Facultades response = new Facultades();
		ArrayList<Facultad> list = new ArrayList<>();
		facultadRepository.findAll().forEach(e -> list.add(e));
		response.setFacultadList(list);
		return response;
	}

	// ***Api Final Front
	@PostMapping(path = "/updatefacultad", consumes = "application/json", produces = "application/json")
	public Facultad saveFacultadApi(@RequestBody Facultad facultad) {
		// add resource
		facultadRepository.save(facultad);
		return facultad;
	}

	// ***Api Final Front
	@PostMapping(path = "/facultadremove", consumes = "application/json")
	public @ResponseBody ResponseEntity<String> deleteFacultadApi(@RequestBody Facultad facultad) {
		facultadRepository.deleteById(facultad.getId());
		return new ResponseEntity<String>(HttpStatus.OK);
	}

}

