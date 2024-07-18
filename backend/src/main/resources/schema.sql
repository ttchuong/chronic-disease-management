CREATE TABLE IF NOT EXISTS `doctor` (
                                        `id` INT AUTO_INCREMENT PRIMARY KEY,
                                        `name` VARCHAR(255) NOT NULL,
    `specialization` VARCHAR(255) NOT NULL
    );

CREATE TABLE IF NOT EXISTS `patient` (
                                         `id` INT AUTO_INCREMENT PRIMARY KEY,
                                         `avatar` VARCHAR(255) NOT NULL,
    `gender` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL
    );

CREATE TABLE IF NOT EXISTS `appointment` (
                                             `id` INT AUTO_INCREMENT PRIMARY KEY,
                                             `date` DATE NOT NULL,
                                             `time` TIME NOT NULL,
                                             `description` VARCHAR(255) NOT NULL,
    `type` ENUM('VIDEO', 'PHONE', 'CHAT') NOT NULL,
    `status` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL,
    `doctor_id` INT NOT NULL,
    `patient_id` INT NOT NULL,
    FOREIGN KEY (`doctor_id`) REFERENCES `doctor`(`id`),
    FOREIGN KEY (`patient_id`) REFERENCES `patient`(`id`)
    );