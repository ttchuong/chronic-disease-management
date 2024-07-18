package mac.ase.backend.controller;

import mac.ase.backend.model.DoctorModel;
import mac.ase.backend.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/doctor")
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @GetMapping
    public DoctorModel getDoctorById(@RequestParam("id") int id) {
        return doctorService.getDoctorById(id);
    }
}
