package mac.ase.backend.service;

import mac.ase.backend.controller.PatientController;
import mac.ase.backend.model.PatientModel;
import mac.ase.backend.repository.PatientRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
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

    public Boolean existsByUid(String uid) {
        return patientRepository.existsByUid(uid);
    }

    private static final Logger LOGGER = LoggerFactory.getLogger(PatientController.class);

    @Autowired
    ModelMapper modelMapper;

    public PatientModel findPatientByUid(String uid) {
        PatientModel patient = patientRepository.findPatientByUid(uid);
        if(patient == null){
            throw new ResourceNotFoundException("No patient with ID: " + uid + " saved.");
        } else {
            return modelMapper.map(patientRepository.findPatientByUid(uid), PatientModel.class);
        }
    }

    public PatientModel findPatientByUserName(String userName) {
        PatientModel patient = patientRepository.findPatientByUserName(userName);
        if(patient == null){
            throw new ResourceNotFoundException("No patient with userName: " + userName + " saved.");
        } else {
            return patient;
        }
    }

    public PatientModel findPatientById(Long id) {
        return modelMapper.map(patientRepository.findById(Math.toIntExact(id)), PatientModel.class);
    }

    public PatientModel createOrUpdatePatient(PatientModel patient) {
        if (patient == null) {
            throw new IllegalArgumentException("Patient must exist!");
        }
        return patientRepository.save(patient);
    }

    public void deletePatientByUid(String uid) {
        patientRepository.deletePatientByUid(uid);
    }
}
