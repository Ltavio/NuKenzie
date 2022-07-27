import "./style.css";
import { useState } from "react";

const Form = ({
  listTransactions,
  setListTransactions,
  setFiltroEntrada,
  setFilterSaida,
}) => {
  const [description, setDescription] = useState("");
  const [valor, setValor] = useState(0);
  const [typeValue, setTypeValue] = useState("");
  const Transacoes = (event) => {
    event.preventDefault();
    setListTransactions((oldCardList) => [
      ...oldCardList,
      { description, valor, typeValue },
    ]);
  };
  return (
    <div className="formulario">
      <form onSubmit={Transacoes}>
        <label htmlFor="descricao">Descrição</label>
        <input
          type="text"
          placeholder="Digite aqui sua descrição"
          name="descricao"
          className="descricao"
          onChange={(event) => setDescription(event.target.value)}
        />
        <p>Ex: Compra de roupas</p>

        <div className="valor">
          <section className="sec-valor">
            <label htmlFor="valor">Valor</label>
            <input
              type="number"
              name="valor"
              className="valor"
              placeholder="R$ Valor"
              onChange={(event) => setValor(event.target.value)}
            />
          </section>
          <section className="sec-tipoValor">
            <label htmlFor="tipoValor">Tipo de valor</label>
            <select
              name="tipoValor"
              className="tipoValor"
              onChange={(event) => setTypeValue(event.target.value)}
            >
              <option value="entrada">Entrada</option>
              <option value="despesa">Despesa</option>
            </select>
          </section>
        </div>
        <button>Inserir valor</button>
      </form>
    </div>
  );
};

export default Form;
