import React, {Component} from 'react';
import Saida from "./Saida";
import {useState} from "react";



function Entrada(props){

    const[texto, settexto] = useState("");
    
    function alteratexto(frase){
    console.log(frase)
    settexto(frase)
    }
    
    return (
    <div>
        <br></br>
    <input type="text" name="nome" onChange={e=>{alteratexto(e.target.value)}}></input>
    <Saida name={texto} />
    <table border="1">
          <td>
            <p> Login: [RICAEL] passado via props</p>
            <p>Segunda parágrafo com texto qualquer</p>
            </td>
          </table>
    </div>
    );
    }

export default Entrada;
