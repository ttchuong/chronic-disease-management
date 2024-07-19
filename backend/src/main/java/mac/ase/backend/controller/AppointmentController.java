package mac.ase.backend.controller;

import io.swagger.v3.oas.annotations.Operation;
import mac.ase.backend.model.AppointmentModel;
import mac.ase.backend.model.DoctorModel;
import mac.ase.backend.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointment")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

    @GetMapping()
    @Operation(summary = "Get a list of all appointments")
    @CrossOrigin
    @ResponseBody
    public List<AppointmentModel> findAllAppointments() {
        return appointmentService.findAllAppointments();
    }

    @GetMapping("/patient")
    @Operation(summary = "Get a list of all appointments of the the currently logged in user")
    @CrossOrigin
    @ResponseBody
    public List<AppointmentModel> getAllAppointmentsOfPatient() {
        return appointmentService.getAllAppointmentsOfLoggedInUser();
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get an appointment by its id")
    @CrossOrigin
    @ResponseBody
    public AppointmentModel getAppointmentById(@PathVariable("id") int id) {
        return appointmentService.getAppointmentById(id);
    }

    /**
     * This method acts as save/create method
     *
     * @param appointment
     * @return
     */
    @PostMapping
    @Operation(summary = "Create a new appointment")
    @CrossOrigin
    @ResponseBody
    public Boolean postSignupForAppointment(@RequestBody AppointmentModel appointment)  {
        return appointmentService.createAppointment(appointment) != null;
    }
}
