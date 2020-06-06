package com.JJMR.test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.app.controllers.VehicleController;
import com.app.models.Vehicle;
import com.app.models.Vehicles;
import com.app.repository.VehicleRepository;

@ExtendWith(MockitoExtension.class)
public class EmployeeControllerUnitTests 
{ 
	@InjectMocks
	VehicleController vehicleController;
	
	@Mock
	VehicleRepository vehicleRepository;
	
	@Test
	public void testAddEmployee() 
	{
		MockHttpServletRequest request = new MockHttpServletRequest();
		RequestContextHolder.setRequestAttributes(new ServletRequestAttributes(request));
		
		Vehicle vehicle = new Vehicle();
		vehicle.setId((long) 1);
		when(vehicleRepository.save(any(Vehicle.class))).thenReturn(vehicle);
		
		Vehicle vehicleToAdd = new Vehicle(null, "Moto", "RQI29");
		ResponseEntity<Object> responseEntity = vehicleController.addVehicle(vehicleToAdd);
		
		assertThat(responseEntity.getStatusCodeValue()).isEqualTo(201);
		assertThat(responseEntity.getHeaders().getLocation().getPath()).isEqualTo("/1");
	}
	
	@Test
	public void testFindAll() 
	{
		// given
		Vehicle carro = new Vehicle(null, "Carro", "EKN209");
		Vehicle moto = new Vehicle(null, "Moto", "RQI28A");
		List<Vehicle> list = new ArrayList<Vehicle>();
		list.addAll(Arrays.asList(carro, moto));

		when(vehicleRepository.findAll()).thenReturn(list);

		// when
		Vehicles result = vehicleController.getVehicles();

		// then
		assertThat(result.getVehicleList().size()).isEqualTo(2);
		
		assertThat(result.getVehicleList().get(0).getLicense_id())
						.isEqualTo(carro.getLicense_id());
		
		assertThat(result.getVehicleList().get(1).getLicense_id())
						.isEqualTo(moto.getLicense_id());
	}
}
