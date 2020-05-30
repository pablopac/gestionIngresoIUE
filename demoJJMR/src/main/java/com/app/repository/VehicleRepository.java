package com.app.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.app.models.Vehicle;
import java.util.List;

@Repository
public interface VehicleRepository extends CrudRepository<Vehicle, Long> {

	List<Vehicle> findByLicense_id(String license_id);

	List<Vehicle> findByLicense_idContaining(String license_id);

}
