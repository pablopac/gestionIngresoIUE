package com.iue.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "customer")
public class Customer  implements Serializable {
	private static final long serialVersionUID = 1L;
	
	
	public Customer() {
	}

	public Customer(int id,String name, String organization_id) {
		super();
		this.id = id;
		this.organization_id = organization_id;
		this.name = name;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private int id;
	
	@Column(name = "organization_id")
	private String organization_id;
	
	@Column(name = "name")
	private String name;
	
	@Override
	public String toString() {
		return "Customer [id=" + id + ",name=" + name + " ,organization_id=" + organization_id + "]";
	}

	public int getId() {
		return  id;
	}

	public void setId(int i) {
		this.id = i;
	}

	public String getCustomer_id() {
		return organization_id;
	}

	public void setCustomer_id(String organization_id) {
		this.organization_id = organization_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
