/*
  Warnings:

  - Added the required column `umur` to the `Actress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Actress" ADD COLUMN     "umur" TEXT NOT NULL;
