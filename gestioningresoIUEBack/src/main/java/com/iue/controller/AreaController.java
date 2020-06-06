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

import com.iue.entity.*;
import com.iue.repository.AreaRepository;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "/areaAPI")
public class AreaController {
	@Autowired
	private AreaRepository areaRepository;

	// ***Api Final Front
	@PostMapping(path = "/addarea", consumes = "application/json", produces = "application/json")
	public Area addNewAreaApi(@RequestBody Area area) {
		// add resource
		area = areaRepository.save(area);
		return area;
	}

	// ***Api Final Para FRONT
	@GetMapping(path = "/areagetall", produces = "application/json")
	public Areas getAllAreasApi() {
		Areas response = new Areas();
		ArrayList<Area> list = new ArrayList<>();
		areaRepository.findAll().forEach(e -> list.add(e));
		response.setAreaList(list);
		return response;
	}

	// ***Api Final Front
	@PostMapping(path = "/updatearea", consumes = "application/json", produces = "application/json")
	public Area saveAreaApi(@RequestBody Area area) {
		// add resource
		areaRepository.save(area);
		return area;
	}

	// ***Api Final Front
	@PostMapping(path = "/arearemove", consumes = "application/json")
	public @ResponseBody ResponseEntity<String> deleteAreaApi(@RequestBody Area area) {
		areaRepository.deleteById(area.getId());
		return new ResponseEntity<String>(HttpStatus.OK);
	}

}

