package com.app.models;

import java.util.ArrayList;
import java.util.List;

public class Facultades 
{
    private List<Facultad> facultadList;
    
    public List<Facultad> getFacultadList() {
        if(facultadList == null) {
        	facultadList = new ArrayList<>();
        }
        return facultadList;
    }
 
    public void setFacultadList(List<Facultad> facultadList) {
        this.facultadList = facultadList;
    }
}
