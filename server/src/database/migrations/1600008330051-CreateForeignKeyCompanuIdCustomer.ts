import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateForeignKeyCompanuIdCustomer1600008330051 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createForeignKey(
        'customers',
        new TableForeignKey({
          name: 'CompanyIdCustomer',
          columnNames: ['company_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'companies',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('customers', 'CompanyIdCustomer');
    }
}
