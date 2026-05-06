/*
  Warnings:

  - You are about to drop the column `logro` on the `Venture` table. All the data in the column will be lost.
  - You are about to drop the column `objetoInpacto` on the `Venture` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Venture" DROP COLUMN "logro",
DROP COLUMN "objetoInpacto",
ADD COLUMN     "impactoSocial" TEXT,
ADD COLUMN     "objetivos" TEXT;
