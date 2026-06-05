/*
  Warnings:

  - The values [LOOKING_PARTNERS,MENTORING,FREELANCE] on the enum `Availability` will be removed. If these variants are still used in the database, this will fail.
  - The `availability` column on the `Profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Availability_new" AS ENUM ('NONE', 'IDEA_BUSINESS', 'INVESTORS', 'STRATEGIC_ALLIES', 'OFFER_MENTORSHIP', 'SEEK_MENTORSHIP', 'TEAM_TALENT');
ALTER TABLE "Profile" ALTER COLUMN "availability" TYPE "Availability_new" USING ("availability"::text::"Availability_new");
ALTER TYPE "Availability" RENAME TO "Availability_old";
ALTER TYPE "Availability_new" RENAME TO "Availability";
DROP TYPE "Availability_old";
COMMIT;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "availability",
ADD COLUMN     "availability" "Availability" NOT NULL DEFAULT 'NONE';
