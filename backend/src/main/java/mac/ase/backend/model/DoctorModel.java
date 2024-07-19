package mac.ase.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "doctor")
@Entity
public class DoctorModel {
    @Id
    private int id;
    private String name;
    private String specialization;
    @OneToMany(mappedBy = "doctor", fetch = FetchType.LAZY)
    private Set<AppointmentModel> appointments;
}
