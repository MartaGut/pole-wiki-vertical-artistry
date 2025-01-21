import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveEmailFromUserTable1684252000003 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" RENAME TO "user_old"`);

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

    await queryRunner.query(`
      INSERT INTO "user" ("id", "name", "lastname", "username", "password_hash", "role")
      SELECT "id", "name", "lastname", "username", "password_hash", "role" FROM "user_old"
    `);

    await queryRunner.query(`DROP TABLE "user_old"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" RENAME TO "user_old"`);

    await queryRunner.query(`
      CREATE TABLE "user" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "name" TEXT NOT NULL,
        "lastname" TEXT NOT NULL,
        "username" TEXT NOT NULL UNIQUE,
        "password_hash" TEXT NOT NULL,
        "email" TEXT NOT NULL UNIQUE,
        "role" TEXT CHECK(role IN ('instructor', 'student')) NOT NULL
      )
    `);

    await queryRunner.query(`
      INSERT INTO "user" ("id", "name", "lastname", "username", "password_hash", "email", "role")
      SELECT "id", "name", "lastname", "username", "password_hash", NULL, "role" FROM "user_old"
    `);

    await queryRunner.query(`DROP TABLE "user_old"`);
  }
}
