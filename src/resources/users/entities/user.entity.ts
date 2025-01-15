import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  fatherLastName: string;

  @Column({ nullable: true })
  moderLastName?: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true, select: false })
  password: string;

  @Column({ nullable: true })
  resetPasswordToken: string;

  @ManyToMany(() => Role, (roles) => roles.id, {
    eager: true,
  })
  @JoinTable()
  roles: Role[] | number[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.id, {
    nullable: true,
  })
  createdBy: User;

  @ManyToOne(() => User, (user) => user.id, {
    nullable: true,
  })
  upatedBy: User;
}
