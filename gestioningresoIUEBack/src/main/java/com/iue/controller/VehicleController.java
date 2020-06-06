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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.iue.entity.Vehicle;
import com.iue.entity.Vehicles;
import com.iue.repository.VehicleRepository;




@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path="/vehicleAPI")

public class VehicleController {
	@Autowired
	private VehicleRepository vehicleRepository;

	/*@GetMapping(path = "/getallvehicle")
	public @ResponseBody Iterable<Vehicle> getAllVehicle() {
		return vehicleRepository.findAll();
	}

	@GetMapping(path = "/Vehicles", produces = "application/json")
	public Vehicles getVehicles() {
		Vehicles response = new Vehicles();
		ArrayList<Vehicle> list = new ArrayList<>();
		vehicleRepository.findAll().forEach(e -> list.add(e));
		response.setVehicleList(list);
		return response;
	}

	@PostMapping(path = "/vehicles", consumes = "application/json", produces = "application/json")
	public ResponseEntity<Object> addVehicle(@RequestBody Vehicle vehicle) {

		// add resource
		vehicle = vehicleRepository.save(vehicle);

		// Create resource location
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(vehicle.getId())
				.toUri();

		// Send location in response
		return ResponseEntity.created(location).build();
	}

	/*@GetMapping(path = "/addvehicle")
	public @ResponseBody String addNewVehicle(@RequestParam Long id, String vehicle,
			@RequestParam String license) {

		vehicleRepository.save(new Vehicle(id, vehicle, license));

		return "Saved";

	}*/

	/*@PostMapping(path = "/updatevehicle")
	public @ResponseBody ResponseEntity<String> updateNewVehicle(@RequestBody Vehicle vehicle) {
		vehicleRepository.save(vehicle);
		return new ResponseEntity<String>(HttpStatus.OK);
	}*/

	/*@PostMapping(path = "/removevehicle")
	public @ResponseBody ResponseEntity<String> removeVehicle(@RequestBody Vehicle vehicle) {
		vehicleRepository.delete(vehicle);
		return new ResponseEntity<String>(HttpStatus.OK);
	}*/
	
	
	// ***Api Final Front
		@PostMapping(path = "/addvehicle", consumes = "application/json", produces = "application/json")
		public Vehicle addNewVehicleApi(@RequestBody Vehicle vehicle) {
			// add resource
			vehicle = vehicleRepository.save(vehicle);
			return vehicle;
		}

		// ***Api Final Para FRONT
		@GetMapping(path = "/vehiclegetall", produces = "application/json")
		public Vehicles getAllvehiclesApi() {
			Vehicles response = new Vehicles();
			ArrayList<Vehicle> list = new ArrayList<>();
			vehicleRepository.findAll().forEach(e -> list.add(e));
			response.setVehicleList(list);
			return response;
		}

		// ***Api Final Front
		@PostMapping(path = "/updatevehicle", consumes = "application/json", produces = "application/json")
		public Vehicle savevehicleApi(@RequestBody Vehicle vehicle) {
			// add resource
			vehicleRepository.save(vehicle);
			return vehicle;
		}

		// ***Api Final Front
		@PostMapping(path = "/vehicleremove", consumes = "application/json")
		public @ResponseBody ResponseEntity<String> deletevehicleApi(@RequestBody Vehicle vehicle) {
			vehicleRepository.deleteById(vehicle.getId());
			return new ResponseEntity<String>(HttpStatus.OK);
		}

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

