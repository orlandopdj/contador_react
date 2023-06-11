import './style.css'
export default function  Botao(props) {
    
    return(
        <button onClick={() => props.clicando()} className='botao'>{props.texto}</button>
    )
}