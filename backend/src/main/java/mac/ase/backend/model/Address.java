package mac.ase.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Objects;

/**
 * This class represents the sub-model of the database
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Address {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    @Column
    private String street;
    @Column
    private String number;
    @Column
    private String door;
    @Column
    private String floor;
    @Column
    private String place;
    @Column
    private String zip;
    @Column
    private String city;
    @Column
    private String country;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Address address = (Address) o;
        return zip == address.zip &&
                Objects.equals(id, address.id) &&
                Objects.equals(street, address.street) &&
                Objects.equals(number, address.number) &&
                Objects.equals(door, address.door) &&
                Objects.equals(floor, address.floor) &&
                Objects.equals(place, address.place) &&
                Objects.equals(city, address.city) &&
                Objects.equals(country, address.country);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, street, number, door, floor, place, zip, city, country);
    }

}
