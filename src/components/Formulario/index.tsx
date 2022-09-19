import React, {Component, Dispatch, SetStateAction} from 'react';
import Botao from "../Botao";
import style from './Formulario.module.scss';
import {ITarefa} from "../../types/tarefa";
import {v4 as uuidv4} from 'uuid';

class Formulario extends Component<{
    setTarefas: Dispatch<SetStateAction<ITarefa[]>>
}> {
    state = this.getInitialState();

    adicionarTarefa(event: React.FormEvent) {
        event.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {
            ...this.state,
            selecionado: false,
            completado: false,
            id: uuidv4()
        }])
        this.setState({...this.getInitialState()});
    }

    getInitialState() {
        return {
            tarefa: '',
            tempo: '00:00'
        }
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value={this.state.tarefa}
                        onChange={event => this.setState({...this.state, tarefa: event.target.value})}
                        placeholder="O que você vai estudar"
                        required
                    />
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        value={this.state.tempo}
                        onChange={event => this.setState({...this.state, tempo: event.target.value})}
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Botao
                    tipo="submit"
                    texto="Adicionar"
                />
            </form>
        );
    }
}

export default Formulario;
