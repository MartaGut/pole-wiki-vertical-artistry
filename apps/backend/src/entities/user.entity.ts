import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Role {
  STUDENT = 'student',
  INSTRUCTOR = 'instructor',
}

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.STUDENT,
  })
  @Column({ type: 'text', nullable: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  lastname: string;

  @Column({ type: 'text', nullable: true, unique: true })
  username: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text', nullable: false })
  password_hash: string;
}
