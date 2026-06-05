/*
  Warnings:

  - The values [IDEA_BUSINESS,INVESTORS,STRATEGIC_ALLIES,OFFER_MENTORSHIP,SEEK_MENTORSHIP,TEAM_TALENT] on the enum `Availability` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Availability_new" AS ENUM ('NONE', 'LOOKING_PARTNERS', 'MENTORING', 'FREELANCE');
ALTER TABLE "Profile" ALTER COLUMN "availability" DROP DEFAULT;
ALTER TABLE "Profile" ALTER COLUMN "availability" TYPE "Availability_new" USING ("availability"::text::"Availability_new");
ALTER TYPE "Availability" RENAME TO "Availability_old";
ALTER TYPE "Availability_new" RENAME TO "Availability";
DROP TYPE "Availability_old";
ALTER TABLE "Profile" ALTER COLUMN "availability" SET DEFAULT 'NONE';
COMMIT;
