/*
  Warnings:

  - You are about to drop the column `slug` on the `Talent` table. All the data in the column will be lost.
  - Added the required column `genre` to the `Talent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Talent" DROP COLUMN "slug",
ADD COLUMN     "genre" TEXT NOT NULL;
