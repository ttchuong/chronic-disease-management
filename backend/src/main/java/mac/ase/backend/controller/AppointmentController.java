package mac.ase.backend.controller;

import mac.ase.backend.model.AppointmentModel;
import mac.ase.backend.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/appointment")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

    @GetMapping
    public AppointmentModel getAppointmentById(@RequestParam("id") int id) {
        return appointmentService.getAppointmentById(id);
    }
}
