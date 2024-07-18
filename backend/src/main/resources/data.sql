-- Insert Doctor
INSERT INTO `doctor` (`name`, `specialization`) VALUES ('Dr. John Doe', 'Cardiologist');

-- Insert Patient
INSERT INTO `patient` (`avatar`, `gender`, `name`, `email`, `phone`) VALUES ('/images/user/user-01.png', 'male', 'Bogdan Krivenchenko', 'test@uwindsor.ca', '123456789');

-- Insert Appointment
INSERT INTO `appointment` (`date`, `time`, `description`, `type`, `status`, `doctor_id`, `patient_id`) VALUES ('2021-07-01', '10:00:00', 'Cardiology Consultation', 'VIDEO', 'PENDING', 1, 1);