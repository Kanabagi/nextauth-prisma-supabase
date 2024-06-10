/*
  Warnings:

  - Added the required column `desc` to the `Wanita` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Wanita" ADD COLUMN     "desc" TEXT NOT NULL;
