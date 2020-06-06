package com.JJMR.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.jdbc.Sql;

import com.app.DemoJjmrApplication;
import com.app.models.Vehicle;
import com.app.models.Vehicles;

@SpringBootTest(classes = DemoJjmrApplication.class, 
		webEnvironment = WebEnvironment.RANDOM_PORT)
public class EmployeeControllerIntegrationTests 
{
	@LocalServerPort
	private int port;

	@Autowired
	private TestRestTemplate restTemplate;

	@Sql({ "classpath:schema.sql", "classpath:data.sql" })
	@Test
	public void testAllEmployees() 
	{
		assertTrue(
				this.restTemplate
					.getForObject("http://localhost:" + port + "/pos/vehicles", Vehicles.class)
					.getVehicleList().size() == 3);
	}

	@Test
	public void testAddEmployee() {
		Vehicle employee = new Vehicle(null, "Carro", "EKN209");
		
		ResponseEntity<String> responseEntity = this.restTemplate
			.postForEntity("http://localhost:" + port + "/pos/vehicles", employee, String.class);

		assertEquals(201, responseEntity.getStatusCodeValue());
	}
}
