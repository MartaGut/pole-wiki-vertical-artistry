import { MigrationInterface, QueryRunner } from 'typeorm';

export class Test1736336843578 implements MigrationInterface {
  name = 'Test1736336843578';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "temporary_pole_figurine" ("id" integer PRIMARY KEY, "name" text NOT NULL, "tag" text, "level" text, "side" text)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_pole_figurine"("id", "name", "tag", "level", "side") SELECT "id", "name", "tag", "level", "side" FROM "pole_figurine"`,
    );
    await queryRunner.query(`DROP TABLE "pole_figurine"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_pole_figurine" RENAME TO "pole_figurine"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY, "name" text NOT NULL, "lastname" text NOT NULL, "username" text NOT NULL, "password_hash" text NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"))`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_user"("id", "name", "lastname", "username", "password_hash") SELECT "id", "name", "lastname", "username", "password_hash" FROM "user"`,
    );
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
    await queryRunner.query(
      `CREATE TABLE "temporary_pole_figurine" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" text NOT NULL, "tag" text, "level" text, "side" text)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_pole_figurine"("id", "name", "tag", "level", "side") SELECT "id", "name", "tag", "level", "side" FROM "pole_figurine"`,
    );
    await queryRunner.query(`DROP TABLE "pole_figurine"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_pole_figurine" RENAME TO "pole_figurine"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" text, "lastname" text, "username" text, "password_hash" text, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_b47eb3ae8b106eb43ac88871532" UNIQUE ("password_hash"))`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_user"("id", "name", "lastname", "username", "password_hash") SELECT "id", "name", "lastname", "username", "password_hash" FROM "user"`,
    );
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
    await queryRunner.query(
      `CREATE TABLE "user" ("id" integer PRIMARY KEY, "name" text NOT NULL, "lastname" text NOT NULL, "username" text NOT NULL, "password_hash" text NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"))`,
    );
    await queryRunner.query(
      `INSERT INTO "user"("id", "name", "lastname", "username", "password_hash") SELECT "id", "name", "lastname", "username", "password_hash" FROM "temporary_user"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_user"`);
    await queryRunner.query(
      `ALTER TABLE "pole_figurine" RENAME TO "temporary_pole_figurine"`,
    );
    await queryRunner.query(
      `CREATE TABLE "pole_figurine" ("id" integer PRIMARY KEY, "name" text NOT NULL, "tag" text, "level" text, "side" text)`,
    );
    await queryRunner.query(
      `INSERT INTO "pole_figurine"("id", "name", "tag", "level", "side") SELECT "id", "name", "tag", "level", "side" FROM "temporary_pole_figurine"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_pole_figurine"`);
    await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
    await queryRunner.query(
      `CREATE TABLE "user" ("id" integer PRIMARY KEY, "name" text NOT NULL, "lastname" text NOT NULL, "username" text NOT NULL, "password_hash" text NOT NULL, "role" text NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"))`,
    );
    await queryRunner.query(
      `INSERT INTO "user"("id", "name", "lastname", "username", "password_hash") SELECT "id", "name", "lastname", "username", "password_hash" FROM "temporary_user"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_user"`);
    await queryRunner.query(
      `ALTER TABLE "pole_figurine" RENAME TO "temporary_pole_figurine"`,
    );
    await queryRunner.query(
      `CREATE TABLE "pole_figurine" ("id" integer PRIMARY KEY, "name" text NOT NULL, "tag" text, "level" text, "side" text)`,
    );
    await queryRunner.query(
      `INSERT INTO "pole_figurine"("id", "name", "tag", "level", "side") SELECT "id", "name", "tag", "level", "side" FROM "temporary_pole_figurine"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_pole_figurine"`);
  }
}
