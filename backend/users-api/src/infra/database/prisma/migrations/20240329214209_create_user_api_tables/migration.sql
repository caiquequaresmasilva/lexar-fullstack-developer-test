-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "user_api_schema";

-- CreateTable
CREATE TABLE "user_api_schema"."user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user_api_schema"."user"("email");
