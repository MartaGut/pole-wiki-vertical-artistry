import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFigurine1736515388312 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "pole_figurine" (
              "id" INTEGER PRIMARY KEY AUTOINCREMENT,
              "name" TEXT NOT NULL,
              "tag" TEXT NULL,
              "level" TEXT NULL,
              "side" TEXT NULL
            )
          `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "pole_figurine"`);
  }
}
