package mac.ase.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "doctor")
@Entity
public class DoctorModel {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;
    @Column
    private String name;
    @Column
    private String phone;
    @Column
    private String fax;
    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;
    @Column
    private String email;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "doctor_speciality",
            joinColumns = @JoinColumn(name = "doctor_id", referencedColumnName = "id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "speciality_id", referencedColumnName = "id", nullable = false))
    private List<Speciality> specialities;

    @OneToMany(mappedBy = "doctor", fetch = FetchType.LAZY)
    private Set<AppointmentModel> appointments;
}
