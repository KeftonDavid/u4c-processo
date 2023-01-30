import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { RegistroAcidente } from "./RegistroAcidente";

@Entity('terceiros')
export class Terceiro{

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    nome: string;

    @Column({type: "text", unique: true})
    cpf: string;

    @ManyToMany(() => RegistroAcidente, registroacidente => registroacidente.terceiro)
    registroacidente: RegistroAcidente
}