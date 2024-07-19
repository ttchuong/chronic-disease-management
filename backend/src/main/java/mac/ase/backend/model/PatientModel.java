package mac.ase.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "patient")
@Entity
public class PatientModel {

    @Id
    private int id;
    private String avatar;
    private String gender;
    private String name;
    private String email;
    private String phone;

    @OneToMany(mappedBy = "patient", fetch = FetchType.LAZY)
    private Set<AppointmentModel> appointments;
}
