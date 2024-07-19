package mac.ase.backend.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Objects;

/**
 * This class represents the sub-model of the database
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "speciality")
@Entity
public class Speciality {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String specialityName;

//    @ManyToMany(mappedBy = "specialities")
//    private List<DoctorModel> doctors;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Speciality that = (Speciality) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(specialityName, that.specialityName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, specialityName);
    }
}
