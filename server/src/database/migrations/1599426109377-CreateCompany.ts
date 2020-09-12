import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompany1599426109377 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
      await queryRunner.createTable(
        new Table({
          name: 'companies',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'name',
              type: 'varchar'
            },
            {
              name: 'description',
              type: 'text'
            },
            {
              name: 'social_facebook',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'social_instagram',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            },{
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            },
          ]
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('companies');
    }

}
