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
@Table(name = "medicalworker")
@Entity
public class MedicalWorker extends Person {
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "DoctorSpeciality",
            joinColumns = @JoinColumn(name = "doctorID", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "specialityID", referencedColumnName = "id"))
    private List<Speciality> specialities;

    private MedicalWorkerType type;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MedicalWorker that = (MedicalWorker) o;
        return super.equals(that) && Objects.equals(specialities, that.specialities) &&
                type == that.type;
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(),specialities, type);
    }

    @Override
    public String toString() {
        return "MedicalWorker{" +
                "specialities=" + specialities +
                ", type=" + type +
                '}';
    }
}
