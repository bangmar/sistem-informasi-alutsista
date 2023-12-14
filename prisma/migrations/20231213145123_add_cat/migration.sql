-- AlterTable
ALTER TABLE `item` ADD COLUMN `category` ENUM('Gun', 'Plane', 'Tank') NOT NULL DEFAULT 'Gun';
