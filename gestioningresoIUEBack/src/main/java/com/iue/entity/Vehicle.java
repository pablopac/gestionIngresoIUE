package com.iue.entity;

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
	private String tipo;
	@Column(name = "licencia")
	private String license;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String gettipo() {
		return tipo;
	}
	public void settipo(String tipo) {
		this.tipo = tipo;
	}
	public String getlicense() {
		return license;
	}
	public void setlicense(String license) {
		this.license = license;
	}
	@Override
	public String toString() {
		return "Vehicle [id=" + id + ", tipo=" + tipo + ", license=" + license + "]";
	}
	public Vehicle(Long id, String tipo, String license) {
		super();
		this.id = id;
		this.tipo = tipo;
		this.license = license;
	}
	public Vehicle() {
		
		// TODO Auto-generated constructor stub
	}
	


}
