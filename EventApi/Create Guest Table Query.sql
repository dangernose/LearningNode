CREATE TABLE `nodesql`.`table_guest` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `guest_name` VARCHAR(45) NOT NULL,
  `guest_address` VARCHAR(45) NULL,
  `guest_phone` VARCHAR(45) NULL,
  `guest_email` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

  ALTER TABLE `nodesql`.`table_guest` 
ADD COLUMN `table_guestcol` VARCHAR(45) NOT NULL AFTER `guest_email`;
