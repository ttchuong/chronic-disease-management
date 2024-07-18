package mac.ase.backend.service;

import mac.ase.backend.model.DoctorModel;
import mac.ase.backend.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;

    public DoctorModel getDoctorById(int id) {
        return doctorRepository.findById(id).orElse(null);
    }
}
