package com.iue.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class TypeId {
	@Id
	@GeneratedValue(  strategy= GenerationType.AUTO,   generator="native")
	@GenericGenerator( name = "native",  strategy = "native"  )
	private Long id;
	private String description;
	/**
	 * @param id
	 * @param description
	 */
	public TypeId(Long id, String description) {
		super();
		this.id = id;
		this.description = description;
	}
	/**
	 * 
	 */
	public TypeId() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	public TypeId(String description) {
		super();
		this.description = description;
		// TODO Auto-generated constructor stub
	}
	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}
	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public String toString() {
		return "TypeId [id=" + id + ", description=" + description + "]";
	}
	
	
	
}
