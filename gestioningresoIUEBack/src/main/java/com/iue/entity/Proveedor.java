package com.iue.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity // This tells Hibernate to make a table out of this class
public class Proveedor {
	@Id
	@GeneratedValue(  strategy= GenerationType.AUTO,   generator="native")
	@GenericGenerator( name = "native",  strategy = "native"  )
	private Integer id;
    private String ProvNit;
    private String ProvNom;
    private String ProvDescrip;

   
   public Proveedor() {}

    public Proveedor(String ProvNit, String ProvNom, String ProvDescrip) {
    	super();
    	this.ProvNit = ProvNit;
    	this.ProvNom = ProvNom;
    	this.ProvDescrip = ProvDescrip;

    	
    }
    
    public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getProvNit() {
		return ProvNit;
	}

	public void setProvNit(String provNit) {
		ProvNit = provNit;
	}

	public String getProvNom() {
		return ProvNom;
	}

	public void setProvNom(String provNom) {
		ProvNom = provNom;
	}

	public String getProvDescrip() {
		return ProvDescrip;
	}

	public void setProvDescrip(String provDescrip) {
		ProvDescrip = provDescrip;
	}
    
    


	

}
