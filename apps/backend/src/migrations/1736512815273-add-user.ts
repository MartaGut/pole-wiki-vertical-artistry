import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUser1736512815273 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
                CREATE TABLE "user" (
                    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
                    "name" TEXT NOT NULL,
                    "lastname" TEXT NOT NULL,
                    "username" TEXT NOT NULL UNIQUE,
                    "password_hash" TEXT NOT NULL,
                    "role" TEXT CHECK(role IN ('instructor', 'student')) NOT NULL
                )
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
