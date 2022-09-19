import React, {useEffect, useState} from 'react';
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import {ITarefa} from "../../types/tarefa";
import {tempoParaSegundos} from "../../common/time";

interface Props {
    tarefaSelecionada: ITarefa | undefined,
    finalizarTarefa: () => void
}

function Cronometro({tarefaSelecionada, finalizarTarefa}: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (tarefaSelecionada?.tempo) setTempo(tempoParaSegundos(tarefaSelecionada.tempo));
    }, [tarefaSelecionada]);

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>

            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao texto="Começar!" onClick={() => regressiva(tempo)}></Botao>
        </div>
    );
}

export default Cronometro;
