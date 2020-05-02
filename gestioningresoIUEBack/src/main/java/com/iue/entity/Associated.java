package com.iue.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity // This tells Hibernate to make a table out of this class
@Table(name= "tbl_associated")
public class Associated implements Serializable  {
	@Id
	@GeneratedValue(  strategy= GenerationType.AUTO,   generator="native")
	@GenericGenerator( name = "native",  strategy = "native"  )
    private Long idAssociated;
    private String associated_id;
    private String nameAssociated;

   
   public Associated() {
   }

    public Associated(Long id, String associated_id, String name) {
 	   super();
    	this.idAssociated = id;
    	this.associated_id = associated_id;
    	this.nameAssociated = name;
    }

	public Long getIdAssociated() {
		return idAssociated;
	}

	public void setIdAssociated(Long idAssociated) {
		this.idAssociated = idAssociated;
	}

	public String getAssociated_id() {
		return associated_id;
	}

	public void setAssociated_id(String associated_id) {
		this.associated_id = associated_id;
	}

	public String getNameAssociated() {
		return nameAssociated;
	}

	public void setNameAssociated(String nameAssociated) {
		this.nameAssociated = nameAssociated;
	}

	@Override
	public String toString() {
		return "Associated [idAssociated=" + idAssociated + ", associated_id=" + associated_id + ", nameAssociated="
				+ nameAssociated + "]";
	}
    
    

}
