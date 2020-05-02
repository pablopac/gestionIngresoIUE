package com.app.models;

import java.util.ArrayList;
import java.util.List;

public class Vehicles {

	private List<Vehicle> vehicleList;
	
	public List<Vehicle> getVehicleList(){
		if(vehicleList == null) {
			vehicleList = new ArrayList<>();
		
		}
		return vehicleList;
	}
	public void setVehicleList(List<Vehicle> vehicleList) {
		this.vehicleList = vehicleList;
	}
}
