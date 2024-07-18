package mac.ase.backend.service;

import mac.ase.backend.model.DoctorModel;
import mac.ase.backend.model.PatientModel;
import mac.ase.backend.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {
    @Autowired
    private PatientRepository patientRepository;

    public List<PatientModel> findAllPatients() {
        return patientRepository.findAll();
    }

    public PatientModel getPatientById(int id) {
        return patientRepository.findById(id).orElse(null);
    }
}
