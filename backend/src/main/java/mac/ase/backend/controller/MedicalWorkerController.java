package mac.ase.backend.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import mac.ase.backend.model.MedicalWorker;
import mac.ase.backend.service.MedicalWorkerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

/**
 * This class handles the methods to communicate with the backend and the medical worker
 */
@Tag(name = "Medical worker api", description = "The MedicalWorker REST service")
@RestController
@RequestMapping("/medicalworker")
public class MedicalWorkerController {
    @Autowired
    MedicalWorkerService medicalWorkerService;
    @Autowired
    ModelMapper modelMapper;

    @GetMapping("/fire")
    @Operation(description = "Get medical worker id with the uid")
    @CrossOrigin
    @ResponseBody
    public MedicalWorker getMedicalWorkerID() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String uid = authentication.getName();
        return medicalWorkerService.findMedicalWorkerByUID(uid);
    }
}