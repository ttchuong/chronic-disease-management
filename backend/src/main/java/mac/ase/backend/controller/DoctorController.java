package mac.ase.backend.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import mac.ase.backend.model.DoctorModel;
import mac.ase.backend.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

/**
 * This class handles the methods to communicate with the backend and the office
 */
@Tag(name = "Doctor api", description = "The Doctor REST service")
@RestController
@RequestMapping("/api/doctor")
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @GetMapping()
    @Operation(summary = "Get a list of all doctors")
    @CrossOrigin
    @ResponseBody
    public List<DoctorModel> findAllDoctors() {
        return doctorService.findAllDoctors();
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get a doctor by its id")
    @CrossOrigin
    @ResponseBody
    public DoctorModel getDoctorById(@PathVariable("id") int id) {
        return doctorService.getDoctorById(id);
    }
}
