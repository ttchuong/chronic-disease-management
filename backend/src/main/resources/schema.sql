CREATE TABLE IF NOT EXISTS `app_user` (
                                          `id` INT AUTO_INCREMENT PRIMARY KEY,
                                          `username` VARCHAR(255) NOT NULL,
                                          `password` VARCHAR(255) NOT NULL,
                                          `role` ENUM('DOCTOR', 'PATIENT', 'ADMIN', 'SUPER_USER') NOT NULL
);

CREATE TABLE IF NOT EXISTS `address` (
                                        `id` INT AUTO_INCREMENT PRIMARY KEY,
                                        `city` VARCHAR(255) NOT NULL,
                                        `country` VARCHAR(255) NOT NULL,
                                        `door` VARCHAR(255),
                                        `floor` VARCHAR(255),
                                        `number` VARCHAR(255) NOT NULL,
                                        `place` VARCHAR(255) NOT NULL,
                                        `street` VARCHAR(255) NOT NULL,
                                        `zip` VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS `doctor` (
                                        `id` INT AUTO_INCREMENT PRIMARY KEY,
                                        `name` VARCHAR(255) NOT NULL,
                                        `phone` VARCHAR(255) NOT NULL,
                                        `fax` VARCHAR(255),
                                        `address_id` INT NOT NULL,
                                        `email` VARCHAR(255),
                                        `user_id` INT NOT NULL,
                                        FOREIGN KEY (`address_id`) REFERENCES `address`(`id`),
                                        FOREIGN KEY (`user_id`) REFERENCES `app_user`(`id`)
);

CREATE TABLE IF NOT EXISTS `speciality` (
                                         `id` INT AUTO_INCREMENT PRIMARY KEY,
                                         `speciality_name` VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS `doctor_speciality` (
                                            `doctor_id` INT NOT NULL,
                                            `speciality_id` INT NOT NULL,
                                            PRIMARY KEY (`doctor_id`, `speciality_id`),
                                            FOREIGN KEY (`doctor_id`) REFERENCES `doctor`(`id`),
                                            FOREIGN KEY (`speciality_id`) REFERENCES `speciality`(`id`)
);

CREATE TABLE IF NOT EXISTS `patient` (
                                         `id` INT AUTO_INCREMENT PRIMARY KEY,
                                         `uid` VARCHAR(255) NOT NULL,
                                         `first_name` VARCHAR(255) NOT NULL,
                                         `last_name` VARCHAR(255) NOT NULL,
                                         `gender` VARCHAR(255),
                                         `email` VARCHAR(255) NOT NULL,
                                         `phone` VARCHAR(255) NOT NULL,
                                         `avatar` VARCHAR(255),
                                         `user_id` INT NOT NULL,
                                         FOREIGN KEY (`user_id`) REFERENCES `app_user`(`id`)
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