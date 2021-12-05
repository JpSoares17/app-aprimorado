import React from 'react';
import './App.css';
import { Rotas } from './paginas/rotas'
import { HeaderLadoEsquerdo } from './componentes/HeaderLadoEsquerdo'
import { HeaderLadoDireito } from './componentes/HeaderLadoDireito'


function App() {
  return (
    <div className="container">
      <header>
        <HeaderLadoEsquerdo />
        <HeaderLadoDireito />
      </header>
      <main>
        <Rotas />
      </main>
      <footer>
      IFPI | Instituto Federal do Piauí - Técnico em Desenvolvimento de Sistemas - TDS
      </footer>
    </div>
  );
}

export default App;
