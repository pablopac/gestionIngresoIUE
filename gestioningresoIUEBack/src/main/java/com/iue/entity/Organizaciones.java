package com.iue.entity;

import java.util.ArrayList;
import java.util.List;

public class Organizaciones {
private List<Organizacion> organizacionList;
    
    public List<Organizacion> getorganizacionList() {
        if(organizacionList == null) {
        	organizacionList = new ArrayList<>();
        }
        return organizacionList;
    }
 
    public void setOrganizacionList(List<Organizacion> organizacionList) {
        this.organizacionList = organizacionList;
    }

}
