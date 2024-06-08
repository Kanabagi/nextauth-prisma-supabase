/*
  Warnings:

  - You are about to drop the `Talent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Talent";

-- CreateTable
CREATE TABLE "Actress" (
    "id" SERIAL NOT NULL,
    "namaAktris" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "umur" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Actress_pkey" PRIMARY KEY ("id")
);
