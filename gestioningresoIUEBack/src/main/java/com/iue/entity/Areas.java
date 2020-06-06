package com.iue.entity;

import java.util.ArrayList;
import java.util.List;

public class Areas 
{
    private List<Area> areaList;
    
    public List<Area> getAreaList() {
        if(areaList == null) {
        	areaList = new ArrayList<>();
        }
        return areaList;
    }
 
    public void setAreaList(List<Area> areaList) {
        this.areaList = areaList;
    }
}
