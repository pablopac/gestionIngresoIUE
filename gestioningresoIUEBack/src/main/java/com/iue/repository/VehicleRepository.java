package com.iue.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.iue.entity.Vehicle;
import java.util.List;

@Repository
public interface VehicleRepository extends CrudRepository<Vehicle, Long> {

	List<Vehicle> findByLicense(String license);

	List<Vehicle> findByLicenseContaining(String license);

}
