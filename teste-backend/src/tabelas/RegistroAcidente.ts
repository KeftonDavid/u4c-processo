import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Terceiro } from "./Terceiro";

@Entity('registroacidentes')
export class RegistroAcidente{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type:"text" })
    donoVeiculo: string;

    @Column({ type:"text" })
    modelo: string;

    @Column({ type: "int" })
    ano: number;

    @Column({ type:"text" })
    placa: string;

    @Column({ type: "text" })
    descricaoAcidente: string;

    @ManyToMany(() => Terceiro, terceiro => terceiro.id)
    @JoinColumn({ name: 'terceiro_id' })
    terceiro: Terceiro;
}