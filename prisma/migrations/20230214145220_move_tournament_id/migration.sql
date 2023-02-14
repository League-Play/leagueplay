/*
  Warnings:

  - You are about to drop the column `tournament_id` on the `TeamCaptain` table. All the data in the column will be lost.
  - Added the required column `tournament_id` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "tournament_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TeamCaptain" DROP COLUMN "tournament_id";
