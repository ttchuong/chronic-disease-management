-- Insert User
INSERT INTO `app_user` (`username`, `password`, `role`) VALUES ('doctor', '$2a$10$IYOdynG.bdZGVoR/JayVU.DXZKzOBTCk1.6t0mfnyTqHs5l7WOfJS', 'DOCTOR');
INSERT INTO `app_user` (`username`, `password`, `role`) VALUES ('patient', '$2a$10$IYOdynG.bdZGVoR/JayVU.DXZKzOBTCk1.6t0mfnyTqHs5l7WOfJS', 'PATIENT');

-- Insert Doctor
INSERT INTO `doctor` (`id`, `name`, `specialization`) VALUES (1, 'Dr. John Doe', 'Cardiologist');

-- Insert Patient
INSERT INTO `patient` (`id`, `avatar`, `gender`, `name`, `email`, `phone`) VALUES (2, '/images/user/user-01.png', 'male', 'Bogdan Krivenchenko', 'test@uwindsor.ca', '123456789');

-- Insert Appointment
INSERT INTO `appointment` (`date`, `time`, `description`, `type`, `status`, `doctor_id`, `patient_id`) VALUES ('2021-07-01', '10:00:00', 'Cardiology Consultation', 'VIDEO', 'PENDING', 1, 2);