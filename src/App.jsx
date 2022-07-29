import HomeScreen from "./components/home_screen";
import Header from "./components/Header";
import Form from "./components/form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

import { useState } from "react";

import "./App.css";

function App() {
  const [Login, setLogin] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);

  const [filters, setFilters] = useState([]);

  /* console.log("filtro de entrada", filtroEntrada);
  console.log("filtro de saida", filtroSaida); */
  return (
    <div className="App">
      {Login ? (
        <>
          <Header setLogin={setLogin} />
          <div className="main">
            <div className="form-money">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                filters={filters}
                setFilters={setFilters}
              />
              <TotalMoney listTransactions={listTransactions} />
            </div>
            <List
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              setFilters={setFilters}
              filters={filters}
            />
          </div>
        </>
      ) : (
        <HomeScreen setLogin={setLogin} className="home" />
      )}
    </div>
  );
}

export default App;
