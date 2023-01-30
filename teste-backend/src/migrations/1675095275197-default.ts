import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675095275197 implements MigrationInterface {
    name = 'default1675095275197'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "terceiros" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "terceiros" ADD "nome" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "terceiros" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "terceiros" ADD "cpf" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "terceiros" ADD CONSTRAINT "UQ_1676d36a98dcf480ee4c23c5823" UNIQUE ("cpf")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "terceiros" DROP CONSTRAINT "UQ_1676d36a98dcf480ee4c23c5823"`);
        await queryRunner.query(`ALTER TABLE "terceiros" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "terceiros" ADD "cpf" text array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "terceiros" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "terceiros" ADD "nome" text array NOT NULL`);
    }

}
