import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('customers')
class Customer {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  url_link: string;

  @Column()
  image: string;

  @Column()
  company_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  upadated_at: Date;

}

export default Customer;
