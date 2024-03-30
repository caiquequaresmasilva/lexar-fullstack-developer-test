-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "product_api_schema";

-- CreateTable
CREATE TABLE "product_api_schema"."brand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_api_schema"."color" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_api_schema"."product" (
    "id" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "brandId" INTEGER NOT NULL,
    "model" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,
    "colorId" INTEGER NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product_api_schema"."product" ADD CONSTRAINT "product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "product_api_schema"."brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_api_schema"."product" ADD CONSTRAINT "product_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "product_api_schema"."color"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
