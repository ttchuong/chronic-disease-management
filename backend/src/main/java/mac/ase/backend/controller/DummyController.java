package mac.ase.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dummy")
public class DummyController {
    
    @RequestMapping(name="/", method = RequestMethod.GET)
    //@CrossOrigin // For testing from other origins (not behind gateway)
    public String dummy() {
        return "Hello World!";
    }
}
