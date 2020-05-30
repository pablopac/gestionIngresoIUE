package com.iue.entity;

import java.util.ArrayList;
import java.util.List;

public class Associateds {
private List<Associated> associatedList;
    
    public List<Associated> getAssociatedList() {
        if(associatedList == null) {
        	associatedList = new ArrayList<>();
        }
        return associatedList;
    }
 
    public void setAssociatedList(List<Associated> associatedList) {
        this.associatedList = associatedList;
    }
}
