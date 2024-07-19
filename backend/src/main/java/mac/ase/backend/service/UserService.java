package mac.ase.backend.service;

import mac.ase.backend.model.User;
import mac.ase.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User getUser(Integer userId) {
        return userRepository.findById(userId).orElse(null);
    }
}
