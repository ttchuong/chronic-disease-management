package mac.ase.backend.repository;

import mac.ase.backend.model.DoctorModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends JpaRepository<DoctorModel, Integer> {
}
