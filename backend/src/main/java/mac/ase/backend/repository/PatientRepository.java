package mac.ase.backend.repository;

import mac.ase.backend.model.PatientModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<PatientModel, Integer> {

    /**
     * @param uid - the uid of the patient
     * @return finds a patient object with the uid
     */
    PatientModel findPatientByUid(String uid);

    /**
     * @param username - the uid of the patient
     * @return finds a patient object with the username
     */
    PatientModel findPatientByUserName(String username);

    /**
     * Deletes an patient with the uid
     * @param uid - the uid of the patient to delete
     */
    void deletePatientByUid(String uid);

    /**
     * @param uid - the uid of the patient to search
     * @return true/false regarding the search result
     */
    boolean existsByUid(String uid);
}
