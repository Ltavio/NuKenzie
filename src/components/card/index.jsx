import { FaTrash } from "react-icons/fa";

export const CardEntrada = ({ elemento }) => {
  console.log(elemento);
  return (
    <div className="card">
      <div className="identificadorEntrada"></div>
      <div className="detalhes">
        <h2>{elemento.description}</h2>
        <p>{elemento.typeValue}</p>
      </div>
      <div className="valor-excluir">
        <h3>R$ {elemento.valor},00</h3>
        <button>
          <FaTrash className="lixeira" />
        </button>
      </div>
    </div>
  );
};

export const CardSaida = ({ elemento }) => {
  console.log(elemento);
  return (
    <div className="card">
      <div className="identificadorSaida"></div>
      <div className="detalhes">
        <h2>{elemento.description}</h2>
        <p>{elemento.typeValue}</p>
      </div>
      <div className="valor-excluir">
        <h3>R$ {elemento.valor},00</h3>
        <button>
          <FaTrash className="lixeira" />
        </button>
      </div>
    </div>
  );
};

/* export default Card; */
