import "./style.css";
import { FaTrash } from "react-icons/fa";
import Card from "../card";
import { useState } from "react";
import CardVazio from "../../NoCard.png";

const List = ({
  listTransactions,
  setListTransactions,
  filters,
  setFilters,
}) => {
  const btnTodos = () => {
    setFilters([]);
  };
  const btnEntradas = () => {
    const elementosFiltrados = listTransactions.filter(
      (elem) => elem.typeValue === "entrada"
    );
    setFilters(elementosFiltrados);
    console.log("entrada", filters);
  };

  const btnSaidas = () => {
    const elementosFiltrados = listTransactions.filter(
      (elem) => elem.typeValue === "despesa"
    );
    setFilters(elementosFiltrados);
    console.log("despesas", filters);
  };

  return (
    <div className="list-geral">
      <div className="cabecalho-lista">
        <h3>Resumo financeiro</h3>
        <div className="btn-filters">
          <button onClick={() => btnTodos()}>Todos</button>
          <button onClick={() => btnEntradas()}>Entradas</button>
          <button onClick={() => btnSaidas()}>Despesas</button>
        </div>
      </div>
      <div className="container-cards">
        {listTransactions.length === 0 && filters.length === 0 ? (
          <>
            <h1 className="TitleNoCard">
              Você ainda não possui nenhum lançamento
            </h1>
            <img src={CardVazio} alt="card vazio" className="noCard" />
            <img src={CardVazio} alt="card vazio" className="noCard" />
            <img src={CardVazio} alt="card vazio" className="noCard" />
          </>
        ) : filters.length > 0 ? (
          filters.map((elemento, index) => (
            <Card
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              elemento={elemento}
              filters={filters}
              setFilters={setFilters}
              key={index}
              index={index}
            />
          ))
        ) : (
          listTransactions.map((elemento, index) => (
            <Card
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              elemento={elemento}
              filters={filters}
              setFilters={setFilters}
              key={index}
              index={index}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default List;
