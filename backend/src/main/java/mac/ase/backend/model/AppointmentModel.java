package mac.ase.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import static mac.ase.backend.helper.Contants.JSON_FORMAT_LOCALDATETIME;

import java.time.LocalDateTime;


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
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonFormat(pattern = JSON_FORMAT_LOCALDATETIME)  // yyyy-MM-dd HH:mm
    private LocalDateTime appointmentBegin;
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonFormat(pattern = JSON_FORMAT_LOCALDATETIME) // yyyy-MM-dd HH:mm
    private LocalDateTime appointmentEnd;

    @ManyToOne
    @JoinColumn(name = "doctor_id", nullable = false)
    private DoctorModel doctor;

    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private PatientModel patient;
}
