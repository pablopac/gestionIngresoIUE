package com.iue.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity // This tells Hibernate to make a table out of this class
@Table(name= "tbl_typeperson")
public class TypePerson implements Serializable  {
	@Id
	@GeneratedValue(  strategy= GenerationType.AUTO,   generator="native")
	@GenericGenerator( name = "native",  strategy = "native"  )
    private Long id;
    private String tp_id;
    private String name;

   
   public TypePerson() {
   }

    public TypePerson(Long id, String tp_id, String name) {
 	   super();
    	this.id = id;
    	this.tp_id = tp_id;
    	this.name = name;
    }

	public Long getIdTP() {
		return id;
	}

	public void setIdTP(Long id) {
		this.id = id;
	}

	public String getTP_id() {
		return tp_id;
	}

	public void setTP_id(String tp_id) {
		this.tp_id = tp_id;
	}

	public String getNameTP() {
		return name;
	}

	public void setNameTP(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Associated [idAssociated=" + id + ", associated_id=" + tp_id + ", nameAssociated="
				+ name + "]";
	}
}