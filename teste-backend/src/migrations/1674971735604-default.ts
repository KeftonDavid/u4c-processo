import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674971735604 implements MigrationInterface {
    name = 'default1674971735604'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP CONSTRAINT "FK_86556ba7d1ed0078297e7b47611"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "registroacidenteId"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "donoVeiculo"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "modelo"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "ano"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "placa"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "descricaoAcidente"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "nome" text array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "cpf" text array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "donoVeiculo" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "modelo" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "ano" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "placa" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "descricaoAcidente" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "descricaoAcidente"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "placa"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "ano"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "modelo"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "donoVeiculo"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "cpf" text array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "nome" text array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "descricaoAcidente" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "placa" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "ano" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "modelo" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "donoVeiculo" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD "registroacidenteId" uuid`);
        await queryRunner.query(`ALTER TABLE "registroacidentes" ADD CONSTRAINT "FK_86556ba7d1ed0078297e7b47611" FOREIGN KEY ("registroacidenteId") REFERENCES "registroacidentes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
