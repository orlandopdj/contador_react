import Botao from './Botao'
import './styles.css'
import { useState } from 'react'



export default function Contador() {
    let [addNum, setAddNum] = useState(1)

    function AdicionarNumero() {
        setAddNum(addNum + 1)
    }
    function DiminuirNumero() {
        setAddNum(addNum - 1)
    }

    function ZerarNum() {
        setAddNum(0)
    }

    return (
        <div className="contador_container">
            <div className='botao_container'>
                <p className='box_num'>
                    <div>{addNum}</div>
                </p>
                <Botao clicando={AdicionarNumero} texto='Adicionar' />
                <Botao clicando={DiminuirNumero} texto="Diminuir" />
                <div>
                    <Botao clicando={ZerarNum} texto="Zerar" />
                </div>
            </div>

        </div>
    )
}