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

import com.iue.entity.Customer;
import com.iue.entity.Customers;
import com.iue.repository.CustomerRepository;



@Controller   
@RequestMapping(path="/pos") 

public class CustomerController {
	
	@Autowired 
	private CustomerRepository customerRepository;
	
	/* Otras Formas  pero Bajo jUnit Testing*/
	@GetMapping(path="/customers", produces = "application/json")
    public Customers getCustomers() 
    {
		Customers response = new Customers();
		ArrayList<Customer> list = new ArrayList<>();
		customerRepository.findAll().forEach(e -> list.add(e));
		response.setCustomerList(list);
        return response;
    }
	
	@PostMapping(path= "/customers", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Object> addcustomer(@RequestBody Customer customer) {       
                
        //add resource
    	customer = customerRepository.save(customer);
        
        //Create resource location
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                                    .path("/{id}")
                                    .buildAndExpand(customer.getId())
                                    .toUri();
        
        //Send location in response
        return ResponseEntity.created(location).build();
    }
	
	@GetMapping(path="/getallcustomer")
	public @ResponseBody Iterable<Customer> getAllCustomer() {
		// This returns a JSON or XML with the users
		return customerRepository.findAll();	
	}
	
	@GetMapping(path="/addcustomer") // Map ONLY GET Requests
	public @ResponseBody String addNewCustomer (
			@RequestParam int id,
			@RequestParam String customer_id,
			@RequestParam String name) {

		customerRepository.save(new 
				Customer(id, customer_id, name));
		
		return "Saved";
	}
	
	@PostMapping(path="/updatecustomer") 
	public @ResponseBody ResponseEntity<String> updateNewCustomer (
			@RequestBody Customer customer) {
		customerRepository.save(customer);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	@PostMapping(path="/removecustomer") 
	public @ResponseBody ResponseEntity<String> removeCustomer (
			@RequestBody Customer customer) {
		customerRepository.delete(customer);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	
	@GetMapping(path="/getbyname")
	public @ResponseBody Iterable<Customer> getByName(
			@RequestParam String name
			) {
		return customerRepository.findByName(name);		
	}
	
	
	@GetMapping(path="/findByNameContaining")
	public @ResponseBody Iterable<Customer> findByNameContaining(
			@RequestParam String name
			) {
		return customerRepository.findByNameContaining(name);
			
	}

	

}
