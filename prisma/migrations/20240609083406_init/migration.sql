-- CreateTable
CREATE TABLE "Wanita" (
    "id" SERIAL NOT NULL,
    "namaAktris" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "umur" TEXT NOT NULL,
    "apalah" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wanita_pkey" PRIMARY KEY ("id")
);
