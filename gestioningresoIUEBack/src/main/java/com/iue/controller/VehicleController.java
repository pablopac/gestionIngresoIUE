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
import com.iue.repository.VehicleRepository;

@Controller
@RequestMapping(path = "/pos")

public class VehicleController {
	@Autowired
	private VehicleRepository VehicleRepository;

	@GetMapping(path = "/getallvehicle")
	public @ResponseBody Iterable<Vehicle> getAllVehicle() {
		return VehicleRepository.findAll();
	}

	@GetMapping(path = "/Vehicles", produces = "application/json")
	public Vehicles getVehicles() {
		Vehicles response = new Vehicles();
		ArrayList<Vehicle> list = new ArrayList<>();
		VehicleRepository.findAll().forEach(e -> list.add(e));
		response.setVehicleList(list);
		return response;
	}

	@PostMapping(path = "/employees", consumes = "application/json", produces = "application/json")
	public ResponseEntity<Object> addVehicle(@RequestBody Vehicle vehicle) {

		// add resource
		vehicle = VehicleRepository.save(vehicle);

		// Create resource location
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(vehicle.getId())
				.toUri();

		// Send location in response
		return ResponseEntity.created(location).build();
	}

	@GetMapping(path = "/addvehicle")
	public @ResponseBody String addNewVehicle(@RequestParam Long id, String vehicle_id,
			@RequestParam String license_id) {

		VehicleRepository.save(new Vehicle(id, vehicle_id, license_id));

		return "Saved";

	}

	@PostMapping(path = "/updatevehicle")
	public @ResponseBody ResponseEntity<String> updateNewVehicle(@RequestBody Vehicle vehicle) {
		VehicleRepository.save(vehicle);
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	@PostMapping(path = "/removevehicle")
	public @ResponseBody ResponseEntity<String> removeVehicle(@RequestBody Vehicle vehicle) {
		VehicleRepository.delete(vehicle);
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	/*
	 * @GetMapping(path = "/getbyname") public @ResponseBody Iterable<Vehicle>
	 * getByName(@RequestParam String license_id) { return
	 * VehicleRepository.findByName(license_id); }
	 */

	/*
	 * @GetMapping(path = "/findByNameContaining") public @ResponseBody
	 * Iterable<Vehicle> findByNameContaining(@RequestParam String license_id) {
	 * return VehicleRepository.findByNameContaining(license_id);
	 * 
	 * }
	 */
}
