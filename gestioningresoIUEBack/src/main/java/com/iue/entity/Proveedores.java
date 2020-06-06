package com.iue.entity;

import java.util.ArrayList;
import java.util.List;

public class Proveedores 
{
    private List<Proveedor> proveedorList;
    
    public List<Proveedor> getProveedorList() {
        if(proveedorList == null) {
        	proveedorList = new ArrayList<>();
        }
        return proveedorList;
    }
 
    public void setProveedorList(List<Proveedor> proveedorList) {
        this.proveedorList = proveedorList;
    }
}
