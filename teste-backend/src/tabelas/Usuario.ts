import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity('usuarios')
export class  Usuario{

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({ type: 'text' })
    nome: string;

    @Column({ type: 'text', unique: true })
    email: string;

    @Column({ type: 'text', unique: true })
    cpf: string;

    @Column({ type: 'text' })
    senha: string;
}