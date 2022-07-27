import "./style.css";
import NuKenzieInitial from "../../Nu Kenzie2.png";

const Header = ({ setLogin }) => {
  const Logout = () => {
    setLogin(false);
  };
  return (
    <div className="cabecalho">
      <img src={NuKenzieInitial} alt="logo-NuKenzie" />
      <button onClick={Logout}>Inicio</button>
    </div>
  );
};

export default Header;
