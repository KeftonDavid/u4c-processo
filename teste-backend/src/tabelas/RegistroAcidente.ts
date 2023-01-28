import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Terceiro } from "./Terceiro";

@Entity('registroacidentes')
export class RegistroAcidente{

    @PrimaryColumn({ type:"text" })
    id: string;

    @Column({ type:"text" })
    email: string;

    @Column({ type:"text" })
    donoVeiculo: string;

    @Column({ type:"text" })
    modelo: string;

    @Column({ type:"text" })
    ano: string;

    @Column({ type:"text" })
    placa: string;

    @OneToMany(() => Terceiro, terceiro => terceiro.id)
    @JoinColumn({ name: 'terceiro_id' })
    terceiro: Terceiro;

}