import logo from './logo.svg';
import './App.css';

import { useState } from 'react'

function App() {
// trabalhanoo com useState para o react entender que ele precisa mudar na interação
  const [endereco, setEndereco] = useState ({})

  const [enderecos]

  function manipularEndereco(evento) {

    const cep = evento.target.value

    setEndereco ({
      cep
    })

    if (cep && cep.length === 8) {
      // obter o cep
      fetch(`https://viacep.com.br/ws/${cep}/json/`) // buscando dados da API
        .then(resposta => resposta.json()) // dados ok, passar para .json()
        .then(dados => { // tudo deu certo, dados retornados pela API
          setEndereco(enderecoAntigo => ({
            ...enderecoAntigo,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf
          }))
        })
    }
  }

// no onChange do input chamamos a função acima manipularEndereco
  return (
    <div className="App">
      <header className="App-header">                                                
        <input placeholder='Digite o CEP' onChange={manipularEndereco}/> 
        <ul>
          <li>CEP: {endereco.cep}</li>
          <li>Bairro: {endereco.bairro}</li>
          <li>Cidade: {endereco.cidade}</li>
          <li>Estado: {endereco.estado}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
