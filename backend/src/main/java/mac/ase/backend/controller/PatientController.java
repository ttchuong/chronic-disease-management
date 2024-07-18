package mac.ase.backend.controller;

import io.swagger.v3.oas.annotations.Operation;
import mac.ase.backend.model.DoctorModel;
import mac.ase.backend.model.PatientModel;
import mac.ase.backend.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patient")
public class PatientController {
    @Autowired
    private PatientService patientService;

    @GetMapping()
    @Operation(summary = "Get a list of all patients")
    @CrossOrigin
    @ResponseBody
    public List<PatientModel> findAllPatients() {
        return patientService.findAllPatients();
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get a patient by its id")
    @CrossOrigin
    @ResponseBody
    public PatientModel getPatientById(@PathVariable("id") int id) {
        return patientService.getPatientById(id);
    }
}
