import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pole_figurine')
export class PoleFigurine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column({ type: 'text', nullable: true })
  tag: string;

  @Column({ type: 'text', nullable: true })
  level: string;

  @Column({ type: 'text', nullable: true })
  side: string;
}
