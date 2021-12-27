import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import Card from './components/layout/Card'


export default (props) => (

  <div className="App">

    <Card titulo="#1 Componente">
      <Primeiro/>
    </Card>


    <Card titulo="#2 Componente">
      <ComParametro
        titulo="Esse é o título"
        subtitulo="Esse é o subtitulo"/>
    </Card>

    <Card titulo="#3 Componente">
      <ComParametro
        titulo="Opa"
        subtitulo="Epa"/>
    </Card>


    <Card titulo="#4 Componente">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>



    <Card titulo="#5 Componente">
      Conteudo, Exercicio X
    </Card>


    <Card titulo="#6 Componente">
      <Repeticao/>
    </Card>

    <Card titulo="#7 Componente">
      <Condicional numero={15}/>
    </Card>

  </div>

)
