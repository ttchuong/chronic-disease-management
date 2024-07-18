package mac.ase.backend.service;

import mac.ase.backend.model.AppointmentModel;
import mac.ase.backend.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;

    public AppointmentModel getAppointmentById(int id) {
        return appointmentRepository.findById(id).orElse(null);
    }
}
