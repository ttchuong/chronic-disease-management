package mac.ase.backend.service;

import mac.ase.backend.model.PatientModel;
import mac.ase.backend.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {
    @Autowired
    private PatientRepository patientRepository;

    public PatientModel getPatientById(int id) {
        return patientRepository.findById(id).orElse(null);
    }
}
