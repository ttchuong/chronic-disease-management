package mac.ase.backend.service;

import mac.ase.backend.controller.AppointmentController;
import mac.ase.backend.controller.PatientController;
import mac.ase.backend.exception.InvalidAppointmentException;
import mac.ase.backend.model.AppointmentModel;
import mac.ase.backend.model.PatientModel;
import mac.ase.backend.repository.AppointmentRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private PatientService patientService;

    private static final Logger LOGGER = LoggerFactory.getLogger(AppointmentController.class);

    public List<AppointmentModel> findAllAppointments() {
        return appointmentRepository.findAll();
    }

    public AppointmentModel getAppointmentById(int id) {
        return appointmentRepository.findById(id).orElse(null);
    }

    public List<AppointmentModel> getAllAppointmentsOfLoggedInUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String uid = authentication.getName();
        PatientModel patient = patientService.findPatientByUid(uid);
        return appointmentRepository.findAppointmentsByPatient(patient, LocalDateTime.now().withNano(0).withSecond(0));
    }

    public AppointmentModel createAppointment(AppointmentModel appointment) throws ResponseStatusException {
        if (appointment == null) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Appointment is invalid!", new IllegalArgumentException());
        }
        if (appointment.getPatient() == null && StringUtils.isEmpty(appointment.getPatient().getFirstName())) {
            // No patient set for appointment, setting currently authenticated patient...

            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String uid = authentication.getName();

            PatientModel patientDTO;
            try {
                patientDTO = patientService.findPatientByUid(uid);
                appointment.setPatient(patientDTO);
            } catch (Exception e) {
                LOGGER.error("User not authenticated, " + e.getMessage());
            }
        }

        try {
            validateAppointment(appointment,false);
        } catch (InvalidAppointmentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e);
        }
        return appointmentRepository.save(appointment);
    }

    /**
     * The method validates a given appointment. It is verified that the appointment is in the future and
     * that the end time is after the begin time. It is also verified that the appointment does not overlap
     * with an existing appointment other than itself (update).
     * @param appointment appointment to be validated
     * @param update if an existing appointment is updated or a new appointment is created
     * @throws InvalidAppointmentException if the appointment is not valid
     */
    private void validateAppointment(AppointmentModel appointment, boolean update) throws InvalidAppointmentException {
        if(!appointment.getAppointmentBegin().isAfter(LocalDateTime.now().withSecond(0).withNano(0))) {
            throw new InvalidAppointmentException("Date must be in the future.");
        }
        if(!appointment.getAppointmentEnd().isAfter(appointment.getAppointmentBegin())) {
            throw new InvalidAppointmentException("The end of the appointment must be after the start of the appointment");
        }
        if(!checkAppointmentInOfficeHour(appointment)) {
            throw new InvalidAppointmentException("Appointment is outside office hours.");
        }
        List<AppointmentModel> overlapping = null;
        // TODO
        if(update) {
            // overlapping = appointmentRepository.getOverlappingAppointmentsByOfficeAndId(appointment.getOffice(), appointment.getId(),appointment.getAppointmentBegin(), appointment.getAppointmentEnd());
        } else {
            // overlapping = appointmentRepository.getOverlappingAppointmentsByOffice(appointment.getOffice(), appointment.getAppointmentBegin(), appointment.getAppointmentEnd());
        }

        if(overlapping != null && overlapping.size() > 0) {
            throw new InvalidAppointmentException("The appointment overlaps with another appointment.");
        }
    }

    /**
     * The method verifies if the given appointment is within the office hours of the
     * office.
     * @param appointment appointment to be verified
     * @return if the appointment is within the office hours
     */
    private boolean checkAppointmentInOfficeHour(AppointmentModel appointment) {
        // TODO
        return true;
    }

    public void deleteAppointmentById(Long id) {
        appointmentRepository.deleteById(Math.toIntExact(id));
    }

}
