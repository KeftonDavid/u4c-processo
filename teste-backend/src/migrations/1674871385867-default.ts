import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674871385867 implements MigrationInterface {
    name = 'default1674871385867'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "registroacidentes" ("id" text NOT NULL, "nome" text NOT NULL, "cpf" text NOT NULL, CONSTRAINT "PK_c2a665ff0e061abcf0d032a7539" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "nome" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "cpf" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "email" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "donoVeiculo" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "modelo" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "ano" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "placa" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "placa"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "ano"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "modelo"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "donoVeiculo"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "cpf" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "nome" text NOT NULL`);
        await queryRunner.query(`DROP TABLE "registroacidentes"`);
    }

}
