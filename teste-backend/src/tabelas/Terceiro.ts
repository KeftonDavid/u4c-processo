import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { RegistroAcidente } from "./RegistroAcidente";

@Entity('registroacidentes')
export class Terceiro{

    @PrimaryColumn({ type:"text" })
    id: string;

    @Column({ type: "text" })
    nome: string;

    @Column({ type: "text" })
    cpf: string;

    @ManyToOne(() => RegistroAcidente, registroacidente => registroacidente.terceiro)
    registroacidente: RegistroAcidente
}