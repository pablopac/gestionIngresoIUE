package com.iue.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.iue.entity.Vehicle;
import com.iue.entity.Vehicles;
import java.util.List;

@Repository
public interface VehicleRepository extends CrudRepository<Vehicle, Long> {

	List<Vehicle> findByLicense_id(String license_id);

	List<Vehicle> findByLicense_idContaining(String license_id);

}
