import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pole_figurine')
export class PoleFigurine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  tag: string;

  @Column({ nullable: true })
  level: string;

  @Column({ nullable: true })
  side: string;
}
