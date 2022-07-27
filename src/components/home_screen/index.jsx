import "./style.css";
import NuKenzie from "../../Nu Kenzie.png";
import image from "../../image_homePage.png";

const HomeScreen = ({ setLogin }) => {
  const Login = () => {
    setLogin(true);
  };

  return (
    <div className="container">
      <div className="part-login">
        <img src={NuKenzie} alt="logo" className="logo" />
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button onClick={Login}>Iniciar</button>
      </div>
      <div className="ilustracao">
        <img src={image} alt="ilustração" className="img-ilustracao" />
      </div>
    </div>
  );
};

export default HomeScreen;
