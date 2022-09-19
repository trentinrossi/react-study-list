import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component<{
    tipo?: "button" | "submit" | "reset" | undefined,
    texto: string
    onClick?: () => void
}> {
    render() {
        const {tipo = "button", texto, onClick} = this.props;
        return (
            <button type={tipo} className={style.botao} onClick={onClick}>
                {texto}
            </button>
        )
    }
}

export default Botao;
