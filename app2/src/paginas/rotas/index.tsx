import { NovaTarefa } from '../NovaTarefa';
import { Tarefas } from '../Tarefas';
import {Routes, Route} from 'react-router-dom'

export function Rotas(){
    return(
      <Routes>
        <Route path="/" element={<Tarefas />} />
        <Route path="/nova-tarefa" element={<NovaTarefa />} />
      </Routes>
    )
}