/**
 * 
 */
package com.iue.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.iue.entity.TypeId;

/**
 * @author Asus
 *
 */
public interface TypeIdRepository extends CrudRepository<TypeId, Integer> {
	
	List<TypeId> findByDescription(String description);
	List<TypeId> findById(Long id);
	

}
