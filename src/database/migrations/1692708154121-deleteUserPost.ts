import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteUserPost1692708154121 implements MigrationInterface {
    name = 'DeleteUserPost1692708154121'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_52378a74ae3724bcab44036645b"`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_52378a74ae3724bcab44036645b" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_52378a74ae3724bcab44036645b"`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_52378a74ae3724bcab44036645b" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
