package com.iue.entity;

import java.util.ArrayList;
import java.util.List;

public class TypeIds {
	
	private List<TypeId> typeIdList;
	
	public List<TypeId> getTypeIdList(){
		if (typeIdList == null) {
			typeIdList = new ArrayList<TypeId>();
		}
		return typeIdList;
	}
	
	public void setTypeIdList(List<TypeId> typeIdList) {
		this.typeIdList = typeIdList;
	}

}
