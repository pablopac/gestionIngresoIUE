package com.iue.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.iue.entity.Customer;
import org.springframework.stereotype.Repository;
@Repository
public interface CustomerRepository extends CrudRepository<Customer, Integer> {
	
    List<Customer> findByName(String name);	    
    List<Customer> findByNameContaining(String name);

}
