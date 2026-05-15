-- CreateEnum
CREATE TYPE "Category" AS ENUM ('TECNOLOGIA', 'COMERCIO', 'SERVICIOS', 'ALIMENTOS', 'MODA', 'EDUCACION');

-- AlterTable
ALTER TABLE "Venture" ADD COLUMN     "category" "Category";
