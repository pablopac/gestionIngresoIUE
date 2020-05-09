package com.iue.entity;

import java.util.ArrayList;
import java.util.List;

public class TypePersons {
private List<TypePerson> typePersonList;
    
    public List<TypePerson> getTypePersonList() {
        if(typePersonList == null) {
        	typePersonList = new ArrayList<>();
        }
        return typePersonList;
    }
 
    public void setTPList(List<TypePerson> associatedList) {
        this.typePersonList = associatedList;
    }
}
