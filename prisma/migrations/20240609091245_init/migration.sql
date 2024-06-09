-- CreateTable
CREATE TABLE "Testing" (
    "id" SERIAL NOT NULL,
    "namaLengkap" TEXT NOT NULL,
    "umur" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Testing_pkey" PRIMARY KEY ("id")
);
