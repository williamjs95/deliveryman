/*
  Warnings:

  - You are about to drop the `deliverymen` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "deliverymen";

-- CreateTable
CREATE TABLE "deliveryman" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "deliveryman_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "deliveryman_username_key" ON "deliveryman"("username");
