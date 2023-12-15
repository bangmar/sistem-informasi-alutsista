-- DropForeignKey
ALTER TABLE `history` DROP FOREIGN KEY `history_itemId_fkey`;

-- AddForeignKey
ALTER TABLE `history` ADD CONSTRAINT `history_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `item`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
