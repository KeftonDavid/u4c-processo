import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674862313570 implements MigrationInterface {
    name = 'default1674862313570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" text NOT NULL, "email" text NOT NULL, "cpf" text NOT NULL, "senha" text NOT NULL, CONSTRAINT "UQ_446adfc18b35418aac32ae0b7b5" UNIQUE ("email"), CONSTRAINT "UQ_ebebcaef8457dcff6e6d69f17b0" UNIQUE ("cpf"), CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuarios"`);
    }

}
