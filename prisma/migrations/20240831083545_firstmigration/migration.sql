/*
  Warnings:

  - You are about to drop the column `order` on the `Menu` table. All the data in the column will be lost.
  - Added the required column `sortOrder` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Menu` DROP COLUMN `order`,
    ADD COLUMN `sortOrder` INTEGER NOT NULL,
    MODIFY `updatedAt` DATETIME(3) NULL;
