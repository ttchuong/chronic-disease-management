package mac.ase.backend.service;

import mac.ase.backend.exception.UserNotAuthenticatedException;
import mac.ase.backend.model.MedicalWorker;
import mac.ase.backend.repository.MedicalWorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class MedicalWorkerService {
    @Autowired
    MedicalWorkerRepository medicalWorkerRepository;

    @Autowired
    ModelMapper modelMapper;

    public MedicalWorker findMedicalWorkerById(long id) throws ResourceNotFoundException {
        Optional<MedicalWorker> result = medicalWorkerRepository.findById(id);
        if (result.isPresent()) {
            return modelMapper.map(result.get(), MedicalWorker.class);
        }
        throw new ResourceNotFoundException("Resource not found id: " + id);
    }

    public MedicalWorker createMedicalWorker(MedicalWorker medicalWorker) {
        return modelMapper.map(medicalWorkerRepository.save(modelMapper.map(medicalWorker, MedicalWorker.class)), MedicalWorker.class);
    }

    public void deleteMedicalWorker(Long id) {
        medicalWorkerRepository.deleteById(id);
    }

    public MedicalWorker updateMedicalWorker(MedicalWorker medicalWorker) {
        MedicalWorker medUpdate = new MedicalWorker();
        medUpdate.setLastName(medicalWorker.getLastName());
        medUpdate.setFirstName(medicalWorker.getFirstName());
        medUpdate.setSpecialities(medicalWorker.getSpecialities());
        medUpdate.setType(medicalWorker.getType());
        medUpdate.setEmail(medicalWorker.getEmail());

        return modelMapper.map(medicalWorkerRepository.save(modelMapper.map(medUpdate, MedicalWorker.class)), MedicalWorker.class);
    }

    public List<MedicalWorker> findAllMedicalWorkers() throws ResourceNotFoundException {
        return Arrays.asList(modelMapper.map(medicalWorkerRepository.findAll(), MedicalWorker[].class));
    }

    public MedicalWorker findMedicalWorkerByUID(String uid) {
        MedicalWorker medicalWorker = medicalWorkerRepository.findMedicalWorkerByUidEquals(uid);
        if (medicalWorker == null)
            throw new UserNotAuthenticatedException("User not authenticated Exception uid " + uid + " !");
        return modelMapper.map(medicalWorker, MedicalWorker.class);
    }
}