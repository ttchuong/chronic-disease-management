package mac.ase.backend.repository;

import mac.ase.backend.model.AppointmentModel;
import mac.ase.backend.model.PatientModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<AppointmentModel, Integer> {

    /**
     * @param patient - the patient of the appointment
     * @param start - the start date of the appointment
     * @return a list of appointments fit the restriction
     */
    @Query("Select a from AppointmentModel a where a.patient = :patient AND a.appointmentBegin >= :start")
    List<AppointmentModel> findAppointmentsByPatient(@Param("patient") PatientModel patient, @Param("start") LocalDateTime start);


}
