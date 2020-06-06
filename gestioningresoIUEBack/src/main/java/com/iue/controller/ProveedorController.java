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
import com.iue.repository.ProveedorRepository;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "/proveedorAPI")
public class ProveedorController {
	@Autowired
	private ProveedorRepository proveedorRepository;

	// ***Api Final Front
	@PostMapping(path = "/addproveedor", consumes = "application/json", produces = "application/json")
	public Proveedor addNewProveedorApi(@RequestBody Proveedor proveedor) {
		// add resource
		proveedor = proveedorRepository.save(proveedor);
		return proveedor;
	}

	// ***Api Final Para FRONT
	@GetMapping(path = "/proveedorgetall", produces = "application/json")
	public Proveedores getAllPreveedoresApi() {
		Proveedores response = new Proveedores();
		ArrayList<Proveedor> list = new ArrayList<>();
		proveedorRepository.findAll().forEach(e -> list.add(e));
		response.setProveedorList(list);
		return response;
	}

	// ***Api Final Front
	@PostMapping(path = "/updateproveedor", consumes = "application/json", produces = "application/json")
	public Proveedor saveProveedorApi(@RequestBody Proveedor proveedor) {
		// add resource
		proveedorRepository.save(proveedor);
		return proveedor;
	}

	// ***Api Final Front
	@PostMapping(path = "/proveedorremove", consumes = "application/json")
	public @ResponseBody ResponseEntity<String> deleteProveedorApi(@RequestBody Proveedor proveedor) {
		proveedorRepository.deleteById(proveedor.getId());
		return new ResponseEntity<String>(HttpStatus.OK);
	}

}

