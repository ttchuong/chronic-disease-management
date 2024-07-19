package mac.ase.backend.controller;

import mac.ase.backend.model.User;
import mac.ase.backend.repository.UserRepository;
import mac.ase.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public User getUser(@RequestParam Integer id) {
        return userService.getUser(id);
    }
}
