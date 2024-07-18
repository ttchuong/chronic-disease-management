package mac.ase.backend.controller;

import mac.ase.backend.model.PatientModel;
import mac.ase.backend.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/patient")
public class PatientController {
    @Autowired
    private PatientService patientService;

    @GetMapping
    public PatientModel getPatientById(@RequestParam("id") int id) {
        return patientService.getPatientById(id);
    }
}
