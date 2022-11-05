/*
  Warnings:

  - The `roles` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('USER', 'ADMIN', 'EDITOR', 'VIEWER', 'STUDENT', 'SETUP', 'ALPHA', 'INT');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "roles",
ADD COLUMN     "roles" "Roles"[] DEFAULT ARRAY['USER']::"Roles"[];
