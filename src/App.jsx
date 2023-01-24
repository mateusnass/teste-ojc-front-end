
import { useEffect } from "react";
import { useState } from "react";
import AppRoutes from "./AppRoutes";
import Menu from "./componentes/Menu/Menu";
import Tabela from "./componentes/Tabela/Tabela";

function App() {

  //UseState
  const [btnIncluir, setBtnIncluir] = useState(true);
  const [clients, setClients] = useState([]);


  //UseEffects
  useEffect(()=>{
    fetch("localhost:8080/clients")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setClients(retorno_convertido));
  }, []);


  //Return
  return (
    <div className="App">
      <Menu />
      <p>{JSON.stringify(clients)}</p>
      <AppRoutes></AppRoutes>
      
      <Tabela botao={btnIncluir} />

    </div>
  );
}

export default App;
