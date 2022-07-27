import "./style.css";
import lixeira from "../../trash.png";
import { FaTrash } from "react-icons/fa";
import { CardEntrada, CardSaida } from "../card";
import { useState } from "react";

const limparLista = document.querySelector(".container-cards");
const List = ({ listTransactions, filtroEntrada, filtroSaida }) => {
  return (
    <div className="list-geral">
      <div className="cabecalho-lista">
        <h3>Resumo financeiro</h3>
        <div className="btn-filters">
          <button>Todos</button>
          <button>Entradas</button>
          <button>Despesas</button>
        </div>
      </div>
      <div className="container-cards">
        {listTransactions.map((elemento, index) =>
          elemento.typeValue === "entrada" ? (
            <CardEntrada elemento={elemento} key={index} />
          ) : (
            <CardSaida elemento={elemento} key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default List;
