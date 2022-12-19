const {Component} = require("react");

const Saida=(props) => {

//Já o componente UsuarioSaida irá renderizar dois parágrafos de texto. O primeiro parágrafo irá conter um nome de usuário informado, enquanto o segundo possuirá um texto qualquer. 
return (
<div>
  <br></br> 
<table border="1">
          <td>
            <p>Login: {props.name} </p>
            <p>Segundo parágrafo com texto qualquer</p></td>
          </table>
          <br></br>
</div>
);
}

export default Saida;





