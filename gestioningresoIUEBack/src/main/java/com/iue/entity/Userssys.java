package com.iue.entity;

import java.util.ArrayList;
import java.util.List;

public class Userssys 
{
    private List<Usersys> usersysList;
    
    public List<Usersys> getUsersysList() {
        if(usersysList == null) {
        	usersysList = new ArrayList<>();
        }
        return usersysList;
    }
 
    public void setUsersysList(List<Usersys> usersysList) {
        this.usersysList = usersysList;
    }
}
