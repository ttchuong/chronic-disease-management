package mac.ase.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "appointment")
public class AppointmentModel {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;
    private String date;
    private String time;
    private String description;
    private String type;
    private String status;

    @ManyToOne
    @JoinColumn(name = "doctor_id", nullable = false)
    private DoctorModel doctor;

    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private PatientModel patient;
}
