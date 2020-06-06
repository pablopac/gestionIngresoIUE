package com.iue.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity // This tells Hibernate to make a table out of this class
public class Area {
	@Id
	@GeneratedValue(  strategy= GenerationType.AUTO,   generator="native")
	@GenericGenerator( name = "native",  strategy = "native"  )
    private Integer id;
    private String areaname;

   
   public Area() {}

    public Area(String area_name) {
    	super();
    	this.areaname = area_name;
    }

	@Override
	public String toString() {
		return "Customer [id=" + id + ", area_name=" + areaname + "]";
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getAreaname() {
		return areaname;
	}

	public void setAreaname(String area_name) {
		this.areaname = area_name;
	}

		

}
