/*
  Warnings:

  - A unique constraint covering the columns `[sequence]` on the table `admissions_applications` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[applicationCode]` on the table `admissions_applications` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `studyType` to the `admissions_applications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "admissions_applications" ADD COLUMN     "applicationCode" TEXT,
ADD COLUMN     "sequence" SERIAL NOT NULL,
ADD COLUMN     "studyType" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "admissions_applications_sequence_key" ON "admissions_applications"("sequence");

-- CreateIndex
CREATE UNIQUE INDEX "admissions_applications_applicationCode_key" ON "admissions_applications"("applicationCode");
