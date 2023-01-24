import React from "react";
import {
  BrowserRouter as Routers,
  Route,
  Routes,
  Navidate,
} from "react-router-dom";
import PagFiltro from "./componentes/Filtragem/PagFiltro";
import Formulario from "./componentes/Formulario/Formulario";
import Login from "./componentes/Login/Index";

import { AuthPtovider } from "./contexts/auth";

// const [btnIncluir, setBtnIncluir] = useState(true);

const AppRoutes = () => {
  return (
    <Routers>
      <AuthPtovider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<PagFiltro />} />
          <Route exact path="/incluir" element={<Formulario />} />
        </Routes>
      </AuthPtovider>
    </Routers>
  );
};

export default AppRoutes;
