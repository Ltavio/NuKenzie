import { FaTrash } from "react-icons/fa";

const Card = ({
  listTransactions,
  setListTransactions,
  filters,
  setFilters,
  elemento,
  index,
}) => {
  const exluirProduto = (elementoDeleted) => {
    /* verificar se o state filter esta vazio */
    if (filters.length > 0) {
      const elementoFiltrado = filters.filter(
        (elem) => elem !== elementoDeleted
      );
      setFilters([...elementoFiltrado]);
    } else {
      const elementoFiltrado = listTransactions.filter(
        (elem) => elem !== elementoDeleted
      );

      setListTransactions([...elementoFiltrado]);
    }
  };
  return (
    <div className="card">
      <div
        className={elemento.typeValue === "entrada" ? "entrada" : "despesa"}
      ></div>
      <div className="detalhes">
        <h2>{elemento.description}</h2>
        <p>{elemento.typeValue}</p>
      </div>
      <div className="valor-excluir">
        <h3>R$ {elemento.valor},00</h3>
        <button
          onClick={() => exluirProduto(elemento)}
          className="excludet"
          id={index}
        >
          <FaTrash className="lixeira" />
        </button>
      </div>
    </div>
  );
};

export default Card;
