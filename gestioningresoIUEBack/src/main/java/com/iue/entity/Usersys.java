package com.iue.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity // This tells Hibernate to make a table out of this class
public class Usersys {
	@Id
	@GeneratedValue(  strategy= GenerationType.AUTO,   generator="native")
	@GenericGenerator( name = "native",  strategy = "native"  )
    private Integer id;
    private String username;
    private String password;

   
   public Usersys() {}

    public Usersys(String username, String password) {
    	super();
    	this.username = username;
    	this.password = password;
    }

	@Override
	public String toString() {
		return "Customer [id=" + id + ", username=" + username + ", password=" + password + "]";
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}



	

}
