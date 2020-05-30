package com.app.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import org.hibernate.annotations.GenericGenerator;


@Entity

public class Vehicle {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
	@GenericGenerator(name = "native", strategy = "native")
	@Column(name = "id")
	private Long id;
	@Column(name = "tipo")
	private String vehicle_id;
	@Column(name = "licencia")
	private String license_id;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getVehicle_id() {
		return vehicle_id;
	}
	public void setVehicle_id(String vehicle_id) {
		this.vehicle_id = vehicle_id;
	}
	public String getLicense_id() {
		return license_id;
	}
	public void setLicense_id(String license_id) {
		this.license_id = license_id;
	}
	@Override
	public String toString() {
		return "Vehicle [id=" + id + ", vehicle_id=" + vehicle_id + ", license_id=" + license_id + "]";
	}
	public Vehicle(Long id, String vehicle_id, String license_id) {
		super();
		this.id = id;
		this.vehicle_id = vehicle_id;
		this.license_id = license_id;
	}
	public Vehicle() {
		
		// TODO Auto-generated constructor stub
	}
	


}
