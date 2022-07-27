import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  const calculation = () => {
    return listTransactions.reduce(
      (acumulador, valor) => acumulador + parseInt(valor.valor),
      0
    );
  };
  return (
    <div className="container-money">
      <div className="info-value">
        <h4>Valor total:</h4>
        <p>O valor se refere ao saldo</p>
      </div>

      <span>$ {calculation()},00</span>
    </div>
  );
};

export default TotalMoney;
