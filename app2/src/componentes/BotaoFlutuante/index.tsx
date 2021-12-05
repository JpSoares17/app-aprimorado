import estilos from './estilos.module.css'
import { Link } from 'react-router-dom'


export function BotaoFlutuante(){
    return(
        <div className={ estilos.botao }>
            <Link to="/nova-tarefa">+</Link>
        </div>
    )
}