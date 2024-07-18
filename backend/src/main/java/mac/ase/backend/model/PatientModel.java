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

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;
    private String avatar;
    private String gender;
    private String name;
    private String email;
    private String phone;

    @OneToMany
    private Set<AppointmentModel> appointments;
}
