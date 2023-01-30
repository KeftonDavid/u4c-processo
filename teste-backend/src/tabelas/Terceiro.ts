import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { RegistroAcidente } from "./RegistroAcidente";

@Entity('terceiros')
export class Terceiro{

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text", { array: true })
    nome: string[];

    @Column("text", { array: true })
    cpf: string[];

    @ManyToMany(() => RegistroAcidente, registroacidente => registroacidente.terceiro)
    registroacidente: RegistroAcidente
}