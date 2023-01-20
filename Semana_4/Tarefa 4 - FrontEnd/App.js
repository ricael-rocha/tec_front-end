import React, { useState } from 'react';
import './App.css';
import logado from './imagens/login.png';
import logout from './imagens/logout.png';

function App() {

  const [login, setLogin] = useState(true);

  function handleLogin() {
    setLogin(!login);
  }

  return (
      <div id="Login-container">
        {
          login ? 
          <div id="login">
            <h2>Olá Ricael! Seja bem-vindo!</h2>
            <img src={logado} alt="Login - OK!"/>
            <button onClick={handleLogin}>Sair</button>
          </div>
         : 
        <div id="login">
          <h2>Realize o Login para entrar!</h2>
          <img src={logout} alt="Voce saiu com sucesso!"/>
          <button onClick={handleLogin}>Entrar</button>
         </div>
       }
      </div>
  )
}
export default App;

